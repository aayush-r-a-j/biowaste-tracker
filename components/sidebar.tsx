"use client";
import { useRouter } from "next/navigation";
export default function Sidebar() {
   const router= useRouter();
   const handlelogout= ()=> {
    localStorage.removeItem(
      "isLoggedIn"
    );
    router.push("/login");
   };


    return (
  
      <div className="w-64 min-h-screen bg-green-700 text-white p-6">
  
        <h1 className="text-3xl font-bold mb-10">
          BioWaste
        </h1>
  
  
        <div className="flex flex-col gap-5 text-lg">
  
          <a
            href="/dashboard"
            className="hover:bg-green-800 px-4 py-3 rounded-xl"
          >
            Dashboard
          </a>
  
  
          <a
            href="/waste-entry"
            className="hover:bg-green-800 px-4 py-3 rounded-xl"
          >
            Waste Entry
          </a>
  
  
          {/* <a
            href="/login"
            className="hover:bg-green-800 px-4 py-3 rounded-xl"
          >
            Login
          </a>
   */}
  
          <a
            href="/"
            className="hover:bg-green-800 px-4 py-3 rounded-xl"
          >
            Homepage
          </a>
          <p
            onClick={handlelogout}
            className="cursor-pointer hover:bg-green-800 px-4 py-3 rounded-xl"
            >
               Logout
          </p>
  
        </div>
  
      </div>
  
    );
  }