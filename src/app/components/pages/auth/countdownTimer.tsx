"use client";
import React, { useEffect, useRef, useState } from "react";
import Loader from "../../loader";
import { Icons } from "../../Icons/Icons";
import Image from "next/image";

declare interface WebSocketMessage {
  type:
    | "countdown"
    | "register"
    | "reset"
    | "virify_code_result"
    | "code-sended";
  value?: number;
  token?: string;
  succeed?: boolean;
  phoneNumber?: string;
}

interface CountdownTimerProps {
  phoneNumber: string;
  setPhoneNumber: (value: React.SetStateAction<string | null>) => void;
}

const CountdownTimer = ({
  phoneNumber,
  setPhoneNumber,
}: CountdownTimerProps) => {
  const [countdown, setCountdown] = useState<number>(60);
  const [isConnected, setIsConnected] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [verify_error, setVerifyError] = useState<string | null>(null);
  const [verifying, setverifying] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const code_input = useRef<HTMLInputElement>(null);

  const sendConfirmationCode = async (code: string, phoneNumber: string) => {
    setverifying(true);
    ws.current?.send(
      JSON.stringify({
        type: "code",
        code: code,
        phoneNumber: phoneNumber,
      })
    );
    setverifying(false);
  };

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      ws.current?.send(
        JSON.stringify({
          type: "register",
          phoneNumber: phoneNumber,
        })
      );
      setIsConnected(true);
    };

    ws.current.onmessage = (event: any) => {
      const message: WebSocketMessage = JSON.parse(event.data);
      if (message.type === "countdown" && message.value !== undefined) {
        setCountdown(message.value);
        console.log("code sended to the user..");
      }
      if (message.type === "virify_code_result") {
        console.log(message.token);
        if (!!message.token) {
          setToken(message.token);
          document.cookie = `token=${message.token}; path=/;`;
          setPhoneNumber(null);
        } else {
          setVerifyError("کد اشتباه است یا مشکلی رخ داد");
        }
        // console.log(
        //   "verify-was" + message.succeed ? "successfull" : "unsuccessfull",
        //   message.token
        // );
      }
    };

    ws.current.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      ws.current?.close();
    };
  }, [phoneNumber]);

  const handleReset = async () => {
    try {
      ws.current?.send(
        JSON.stringify({
          type: "register",
          phoneNumber: phoneNumber,
        })
      );
      // The server will automatically send updated countdown via WebSocket
    } catch (error) {
      console.error("Failed to reset code:", error);
    }
  };

  return (
    <div className="error grid gap-2 text-center w-[330px] p-4 rounded-xl shadow-[0px_0px_2px_0px_#a1a3a8]">
      <div className="rtl mb-4 flex items-center justify-center">
        <Image
          className="float-right w-10 scale-150 rounded-full"
          src="/logo192.png"
          alt="myIcon"
          width={40}
          height={40}
          priority
        />
        <span className="font-danaBold mx-auto font-[1000] text-xl text-green-600">
          {phoneNumber}
        </span>
      </div>
      {!!!token ? (
        <>
          <div className="flex items-center gap-4">
            <div className="flex justify-between w-full items-center p-2">
              <span className="text-2xl font-bold text-green-600 ring-[0.5px] ring-gray-100 p-1 rounded-full aspect-square w-10 pt-2 px-1">
                {countdown}
              </span>
              <button
                onClick={handleReset}
                disabled={countdown > 0}
                className={`text-xs ${
                  countdown > 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-green-600 hover:underline"
                }`}
              >
                ارسال دوباره
              </button>
            </div>
          </div>
          {!isConnected && (
            <div className="mt-2 text-sm text-yellow-600">
              Connecting to timer service...
            </div>
          )}

          <div className="w-full grid gap-2">
            <input
              ref={code_input}
              type="text"
              minLength={5}
              maxLength={5}
              className="ltr rounded-xl bg-gray-200 dark:bg-black px-2 py-3 text-center placeholder:text-center focus-visible:outline-none shadow-[0px_0px_2px_0px_#a1a3a8]"
            />
            {verify_error && (
              <div className="relative flex justify-center w-full">
                <span className="ring-[0.5px] ring-red-300 to-rose-400 text-center text-xs text-red-400 font-bold w-full rounded-lg py-2">
                  {verify_error}
                </span>
                <div className="w-1.5 h-1.5 aspect-square rounded-full ring-1 ring-red-300 absolute top-1 right-1"></div>
              </div>
            )}
            <button
              disabled={countdown === 0}
              className="flex w-full items-center justify-between rounded-3xl bg-gradient-to-r from-teal-300 to-green-300 p-1.5 font-bold text-white shadow disabled:opacity-50 "
              onClick={() =>
                sendConfirmationCode(code_input.current!.value, phoneNumber)
              }
            >
              <span className="mx-auto">ارسال کد</span>
              <div>
                {verifying ? (
                  <Loader fill="#fff" className="w-7" />
                ) : (
                  <Icons.login className="h-7 w-7 rounded-full stroke-[2px] pr-1" />
                )}
              </div>
            </button>
          </div>
        </>
      ) : (
        <p className="text-xl font-bold text-center bg-green-500 text-white">
          you have registered successfully...
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
