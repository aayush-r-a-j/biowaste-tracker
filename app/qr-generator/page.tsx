"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QRCode from "qrcode";
import Navbar from "../../components/navbar";

export default function QRGeneratorPage() {

  const [text, setText] = useState("");
  const [qrImage, setQrImage] = useState("");



  const generateQR = async () => {

    if (!text) return;

    try {

      const url = await QRCode.toDataURL(text);
      setQrImage(url);

    } catch (error) {
      console.log(error);
    }

  };
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
          QR Code Generator
        </h1>

        <p className="text-gray-600 mt-2">
          Generate QR codes for biomedical waste tracking
        </p>

      </section>



      <section className="px-8">

        <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl">

          <input
            type="text"
            placeholder="Enter waste details..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />


          <button
            onClick={generateQR}
            className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Generate QR
          </button>



          {qrImage && (

            <div className="mt-10 flex justify-center">

              <img
                src={qrImage}
                alt="QR Code"
                className="w-64 h-64"
              />

            </div>

          )}

        </div>

      </section>

    </main>

  );
}