"use client";
import { Icons } from "@/app/components/Icons/Icons";
import Loader from "@/app/components/loader";
import { ErrorMessage, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  // const [sendingErrors, setSendingErrors] = useState<string>("");
  // const [verifyingErrors, setVerifyingErrors] = useState("");
  // const [verifyCodeSended, setVerifyCodeSended] = useState(false);

  const [codeTimer, setCodeTimer] = useState(60);
  const timeRef = useRef<any>(null);
  const router = useRouter();
  const [sendingCode, setSendingCode] = useState(false);

  const handleSubmit = async (phoneNumber: string) => {
    setSendingCode(true);
    const response = await axios.post("/api/phone", {
      phoneNumber: phoneNumber,
    });
    router.push("/");
    try {
      return response.status;
    } catch (error: any) {
      console.log("there is an erro:", error);
      return error;
    }
  };

  const reduceTimer = () => {
    setCodeTimer(codeTimer - 1);
  };

  useEffect(() => {
    timeRef.current = setInterval(() => {
      reduceTimer();
    }, 1000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, [reduceTimer]);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^0\d{10}$/, "شماره تلفن باید با صفر شروع شود")
      .required(),
  });

  return (
    <div className="mx-auto flex h-[90vh] w-[98%] flex-col items-center justify-start rounded-2xl py-20 sm:w-1/2 lg:w-1/3 text-sm">
      <Formik
        enableReinitialize
        initialValues={{ phoneNumber: "", error: null }}
        onSubmit={(values, { setErrors }) =>
          toast
            .promise(handleSubmit(values.phoneNumber), {
              loading: "در حال ارسال کد",
              success: <b>کد ارسال شد</b>,
              error: <b>ارسال نا موفق</b>,
            })
            .catch((error) => {
              setErrors({ error: error.response.data.message });
              setSendingCode(false);
              return error;
            })
        }
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, isValid, isSubmitting, errors }) => (
          <form
            onSubmit={handleSubmit}
            className="error grid gap-2 text-center w-[330px] p-4 rounded-xl shadow-[0px_0px_2px_0px_#a1a3a8]"
            autoComplete="on"
          >
            <div className="rtl mb-4 flex items-center justify-center">
              <Image
                className="float-right w-10 scale-150 rounded-full"
                src="/logo192.png"
                alt="myIcon"
                width={40}
                height={40}
                priority
              />
              <span className="font-danaBold mx-auto font-[1000]">
                ورود با نام کاربری
              </span>
            </div>
            <div className="relative grid">
              <input
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                className="ltr rounded-xl bg-gray-200 dark:bg-black px-2 py-3 text-center placeholder:text-center focus-visible:outline-none shadow-[0px_0px_2px_0px_#a1a3a8]"
                placeholder="شماره موبایل"
                inputMode="tel"
                minLength={11}
                maxLength={11}
              />
              <Icons.phone className="absolute left-2 top-2.5 h-6 w-6 stroke-[#a1a3a8] stroke-[2px]" />
            </div>
            {errors.error && (
              <div className="relative flex justify-center w-full">
                <ErrorMessage
                  name="error"
                  render={() => (
                    <span className="ring-[0.5px] ring-red-300 to-rose-400 mx-3 text-xs text-red-400 font-bold w-full rounded py-2">
                      {errors.error}
                    </span>
                  )}
                />
                <div className="w-1.5 h-1.5 aspect-square rounded-full ring-1 ring-red-300 absolute top-1 right-4"></div>
              </div>
            )}
            <button
              disabled={sendingCode || !isValid}
              type="submit"
              className="flex w-full items-center justify-between rounded-3xl bg-gradient-to-r from-teal-300 to-green-300 p-1.5 font-bold 
                text-white shadow disabled:opacity-50 "
            >
              <span className="mx-auto">دریافت کد</span>
              <div>
                {sendingCode ? (
                  <Loader fill="#fff" className="w-7" />
                ) : (
                  <Icons.login className="h-7 w-7 rounded-full stroke-[2px] pr-1" />
                )}
              </div>
            </button>
            <div className="mt-5 flex items-center justify-between text-slate-500 w-full text-xs">
              <Link href={"/auth/login"}>ورود با نام کاربری</Link>
              <Link href={"/terms"} className="underline underline-offset-2">
                حریم خصوصی
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
