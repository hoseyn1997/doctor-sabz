import { register } from "@/actions/userService";
import React from "react";

export default async function page() {
  return (
    <div className="px-5">
      <form
        action={register}
        method="POST"
        className="bg-white grid gap-3 w-full md:w-3/4 lg:w-1/4 mx-auto my-10"
      >
        <input
          name="username"
          placeholder="Username"
          required
          className="px-2 py-2 rounded-t-xl ring-1 ring-gray-200 bg-white focus-visible:outline-none"
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          required
          className="px-2 py-2 ring-1 ring-gray-200 bg-white focus-visible:outline-none"
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
          className="bg-green-500 rounded-xl py-2 px-1 text-white font-bold hover:bg-green-400 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}
