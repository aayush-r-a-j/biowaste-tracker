"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "../../components/navbar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";






export default function AnalyticsPage() {
  const [data, setData] = useState<
  {
    category: string;
    waste: number;
  }[]
>([]);
  useEffect(() => {

    const fetchWasteData =
      async () => {
  
        try {
  
          const response =
            await fetch(
              "/api/waste"
            );
  
          const wastes =
            await response.json();
  
  
  
          const categoryTotals = {
  
            Yellow: 0,
            Red: 0,
            White: 0,
            Blue: 0,
  
          };
  
  
  
          wastes.forEach(
            (waste: any) => {
  
              if (
                waste.category.includes(
                  "Yellow"
                )
              ) {
  
                categoryTotals.Yellow +=
                  waste.quantity;
  
              }
  
              else if (
                waste.category.includes(
                  "Red"
                )
              ) {
  
                categoryTotals.Red +=
                  waste.quantity;
  
              }
  
              else if (
                waste.category.includes(
                  "White"
                )
              ) {
  
                categoryTotals.White +=
                  waste.quantity;
  
              }
  
              else if (
                waste.category.includes(
                  "Blue"
                )
              ) {
  
                categoryTotals.Blue +=
                  waste.quantity;
  
              }
  
            }
          );
  
  
  
          const formattedData = [
  
            {
              category: "Yellow",
              waste:
                categoryTotals.Yellow,
            },
  
            {
              category: "Red",
              waste:
                categoryTotals.Red,
            },
  
            {
              category: "White",
              waste:
                categoryTotals.White,
            },
  
            {
              category: "Blue",
              waste:
                categoryTotals.Blue,
            },
  
          ];
  
  
  
          setData(formattedData);
  
        } catch (error) {
  
          console.log(error);
  
        }
  
      };
  
  
  
    fetchWasteData();
  
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



      {/* Header */}
      <section className="px-8 py-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Waste Analytics
        </h1>

        <p className="text-gray-600 mt-2">
          Biomedical waste statistics and monitoring
        </p>

      </section>



      {/* Chart Section */}
      <section className="px-8">

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-8">
            Waste Category Analysis (in KG)
          </h2>



          <div className="w-full h-80">

            <ResponsiveContainer width="40%" height="100%">

              <BarChart data={data}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="category" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="waste" fill="#3b82f6" />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>

    </main>

  );
}