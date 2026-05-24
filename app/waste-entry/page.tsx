"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "../../components/navbar";

export default function WasteEntryPage() {

  const [hospital, setHospital] = useState("");
  const [category, setCategory] = useState("Yellow Category");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Generated");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
  
    e.preventDefault();
  
    const wasteData = {
      hospital,
      category,
      quantity: Number(quantity),
      status,
    };
  
  
  
    try {
  
      const response = await fetch(
        "/api/waste",
        {
          method: "POST",
  
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify(wasteData),
        }
      );
  
  
  
      const data = await response.json();
  
      alert(data.message);
  
      console.log(data);
  
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



      {/* Page Header */}
      <section className="px-8 py-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Waste Entry Form
        </h1>

        <p className="text-gray-600 mt-2">
          Add biomedical waste details for tracking
        </p>

      </section>



      {/* Form Section */}
      <section className="px-8 pb-16">

        <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl">

        <form
           onSubmit={handleSubmit}
           className="space-y-6"
        >

            {/* Hospital Name */}
            <div>

              <label className="block text-gray-700 mb-2 font-medium">
                Hospital Name
              </label>
                
              <input
                type="text"
                placeholder="Enter hospital name"
                value={hospital}
                onChange={(e) =>
                setHospital(e.target.value)
                  }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>



            {/* Waste Category */}
            <div>

              <label className="block text-gray-700 mb-2 font-medium">
                Waste Category
              </label>

              <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              >

                <option>Yellow Category</option>
                <option>Red Category</option>
                <option>White Category</option>
                <option>Blue Category</option>

              </select>

            </div>



            {/* Quantity */}
            <div>

              <label className="block text-gray-700 mb-2 font-medium">
                Waste Quantity (kg)
              </label>

              <input
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) =>
                setQuantity(e.target.value)
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>



            {/* Treatment Method */}
            <div>

              <label className="block text-gray-700 mb-2 font-medium">
                Treatment Method
              </label>

              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              >

                <option>Incineration</option>
                <option>Autoclaving</option>
                <option>Chemical Treatment</option>
                <option>Recycling</option>

              </select>

            </div>



            {/* Status */}
            <div>

              <label className="block text-gray-700 mb-2 font-medium">
                Waste Status
              </label>

              <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              >

                <option>Generated</option>
                <option>Collected</option>
                <option>In Transit</option>
                <option>Treated</option>
                <option>Disposed</option>

              </select>

            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Submit Waste Record
            </button>

          </form>

        </div>

      </section>

    </main>

  );
}