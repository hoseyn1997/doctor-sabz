"use client";
import axios from "axios";
import React from "react";

export default function page() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await axios.post("/api/login", {
      username: formData.get("username"),
      password: formData.get("password"),
    });
    try {
      return response.status;
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="px-5">
      <form
        onSubmit={(e) =>
          handleSubmit(e).then((res) => console.log("res is", res))
        }
        className="bg-white grid gap-3 w-full md:w-3/4 lg:w-1/4 mx-auto my-10"
      >
        <input
          name="username"
          placeholder="Username"
          required
          className="px-2 py-2 rounded-t-xl ring-1 ring-gray-200 bg-white focus-visible:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="px-2 py-2 rounded-b-xl ring-1 ring-gray-200 bg-white focus-visible:outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-br-2xl rounded-tl-2xl py-2 px-1 text-white font-bold hover:bg-green-400 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}
