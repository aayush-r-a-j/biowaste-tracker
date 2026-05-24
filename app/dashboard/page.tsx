"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

export default function DashboardPage() {
 const router= useRouter();
 useEffect(() => {
  const LoggedIn= localStorage.getItem(
      "isLoggedIn"
  );
  if(!LoggedIn){
    router.push("/login");
  }

 },[]);

 const Logout = () => {
  localStorage.removeItem(
    "isLoggedIn"
  );
  router.push("/login");
 };
 const [stats, setStats] = useState({

  hospitals: 0,

  wasteCollected: 0,

  reports: 0,

  pending: 0,

});

useEffect(() => {

  const fetchDashboardStats =
    async () => {

      try {

        const response =
          await fetch(
            "/api/waste"
          );

        const wastes =
          await response.json();



        const uniqueHospitals =
          new Set(
            wastes.map(
              (w: any) =>
                w.hospital
            )
          );



        const totalWaste =
          wastes.reduce(
            (
              sum: number,
              w: any
            ) => sum + w.quantity,
            0
          );



          const activeWaste =
          wastes.filter(
            (w: any) =>
              w.status !== "Disposed"
          );



        setStats({

          hospitals:
            uniqueHospitals.size,

          wasteCollected:
            totalWaste,

          reports:
            wastes.length,

            pending: activeWaste.length,

        });

      } catch (error) {

        console.log(error);

      }

    };



  fetchDashboardStats();

}, []);


  return (

    <main className="min-h-screen bg-gray-100">

<div className="flex">

  <Sidebar />


  <div className="flex-1">

    <Navbar />



    {/* Dashboard Header */}
    <section className="px-8 py-10">

      <h1 className="text-4xl font-bold text-gray-800">
        Dashboard
      </h1>
      
      <p className="text-gray-600 mt-2">
        Real-time biomedical waste monitoring system
      </p>

    </section>



    {/* Stats Cards */}
    <section className="grid md:grid-cols-4 gap-6 px-8">

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-gray-500">
          Total Hospitals
        </h2>

        <p className="text-4xl font-bold text-green-700 mt-3">
          {stats.hospitals}
        </p>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-gray-500">
          Waste Collected
        </h2>

        <p className="text-4xl font-bold text-red-600 mt-3">
          {stats.wasteCollected}
        </p>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-gray-500">
          Active Reports
        </h2>

        <p className="text-4xl font-bold text-blue-600 mt-3">
          {stats.reports}
        </p>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-gray-500">
          Active Waste
        </h2>

        <p className="text-4xl font-bold text-yellow-600 mt-3">
          {stats.pending}
        </p>
      </div>

    </section>

  </div>

</div>

    </main>

  );
}