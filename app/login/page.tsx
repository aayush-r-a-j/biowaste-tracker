"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Navbar from "../../components/navbar";



export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();



    try {

      const response = await fetch(
        "/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );



      const data =
        await response.json();

      alert(data.message);



      if (response.ok) {
        localStorage.setItem(
          "isLoggedIn",
          "true"
        );
        router.push("/dashboard");

      }

    } catch (error) {

      console.log(error);

    }

  };



  return (

    <main className="min-h-screen bg-gray-100">

      <Navbar />



      <div className="flex justify-center items-center py-20">

        <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">

          <h1 className="text-3xl font-bold text-center text-green-700">
            Login
          </h1>



          <form
            onSubmit={handleLogin}
            className="space-y-5 mt-8"
          >

            <div>

              <label className="block mb-2 text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

            </div>



            <div>

              <label className="block mb-2 text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

            </div>



            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl cursor-pointer"
            >
              Login
            </button>

          </form>
          <p className="text-center mt-6 text-gray-600">

                  Don’t have an account?

            <a
                 href="/signup"
                 className="text-green-700 font-semibold ml-2"
             >
                 Signup
           </a>

          </p>

        </div>

      </div>

    </main>

  );
}