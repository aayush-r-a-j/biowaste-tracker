"use client";


import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Navbar from "../../components/navbar";

export default function ScannerPage() {

  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );



    scanner.render(
      (decodedText) => {
        alert(`Scanned Result: ${decodedText}`);
      },

      (error) => {
        console.log(error);
      }
    );



    return () => {
      scanner.clear().catch((error) => console.log(error));
    };

  }, []);


  const router = useRouter();

  useEffect(() => {
  
    const loggedIn =
      localStorage.getItem(
        "isLoggedIn"
      );
  
    if (!loggedIn) {
  
      router.push("/login");
  
    }
  
  }, []);

  return (

    <main className="min-h-screen bg-gray-100">

      <Navbar />



      <section className="px-8 py-10">

        <h1 className="text-4xl font-bold text-gray-800">
          QR Scanner
        </h1>

        <p className="text-gray-600 mt-2">
          Scan biomedical waste QR codes
        </p>

      </section>



      <section className="px-8">

        <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl">

          <div id="reader"></div>

        </div>

      </section>

    </main>

  );
}