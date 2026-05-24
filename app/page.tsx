import Navbar from "../components/navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />
      
        {/* <h1 className="text-2xl font-bold text-green-700">
          BioWaste Tracker
        </h1> */}

        {/* <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Dashboard</a>
          <a href="#">Login</a>
        </div> */}

      



      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl font-bold text-gray-800 max-w-4xl leading-tight">
          Smart Biomedical Waste Tracking System
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Track, monitor, and manage biomedical waste in real time
          using QR technology and digital monitoring systems.
        </p>

        <div className="mt-8 flex gap-4">
        <Link href="/waste-entry">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
            Get Started
          </button>
        </Link>


          {/* <button className="border border-green-600 text-green-700 px-6 py-3 rounded-xl">
            Learn More
          </button> */}

        </div>

      </section>



      {/* Features */}
      <section className="px-8 py-16">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              QR Tracking
            </h3>

            <p className="mt-3 text-gray-600">
              Generate and scan QR codes for biomedical waste tracking.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              Real-Time Monitoring
            </h3>

            <p className="mt-3 text-gray-600">
              Government authorities can monitor waste live.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              Smart Alerts
            </h3>

            <p className="mt-3 text-gray-600">
              Automatic alerts for missing waste reports.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              Analytics
            </h3>

            <p className="mt-3 text-gray-600">
              Waste data visualization and environmental statistics.
            </p>
          </div>

        </div>

      </section>



      {/* Waste Categories */}
      <section className="px-8 py-16 bg-white">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Biomedical Waste Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-yellow-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Yellow
            </h3>

            <p className="mt-2">
              Human & infectious waste
            </p>
          </div>


          <div className="bg-red-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Red
            </h3>

            <p className="mt-2">
              Plastic biomedical waste
            </p>
          </div>


          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              White
            </h3>

            <p className="mt-2">
              Sharps and needles
            </p>
          </div>


          <div className="bg-blue-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Blue
            </h3>

            <p className="mt-2">
              Glass waste and bottles
            </p>
          </div>

        </div>

      </section>



      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6 mt-16">

        <p>
          © 2026 BioWaste Tracker | Biomedical Waste Management System
        </p>

      </footer>

    </main>
  );
}