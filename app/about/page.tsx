import Navbar from "../../components/navbar";

export default function AboutPage() {

  return (

    <main className="min-h-screen bg-gray-100">

      <Navbar />



      <section className="px-8 py-16">

        <h1 className="text-5xl font-bold text-green-700">
          About BioWaste Tracker
        </h1>



        <p className="mt-8 text-lg text-gray-700 leading-8 max-w-4xl">

          BioWaste Tracker is a biomedical waste
          management system developed to improve
          waste tracking, monitoring, and disposal
          processes using QR technology and
          analytics dashboards.

        </p>



        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-green-700">
              QR Tracking
            </h2>

            <p className="mt-4 text-gray-600">

              Generate and scan QR codes to
              track biomedical waste efficiently.

            </p>

          </div>



          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-green-700">
              Analytics
            </h2>

            <p className="mt-4 text-gray-600">

              Monitor waste statistics using
              charts and dashboard analytics.

            </p>

          </div>



          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-green-700">
              Secure System
            </h2>

            <p className="mt-4 text-gray-600">

              Includes login authentication
              and MongoDB database integration.

            </p>

          </div>

        </div>

      </section>

    </main>

  );
}