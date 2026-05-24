export default function Navbar() {
    return (
  
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-md">
  
        <h1 className="text-2xl font-bold text-green-700">
          BioWaste Tracker
        </h1>
  
        <div className="flex gap-6 text-gray-700 font-medium">
        <a href="/dashboard">Dashboard</a>

        <a href="/analytics">Analytics</a>

        <a href="/scanner">Scanner</a>

        <a href="/qr-generator">QR Generator</a>

        <a href="/waste-entry">Waste Entry</a>
          {/* <a href="#" className="hover:text-green-700">
            Home
          </a> */}
  
          <a href="/about" className="hover:text-green-700">
            About
          </a>
  
          {/* <a href="#" className="hover:text-green-700">
            Dashboard
          </a> */}
  
          {/* <a href="#" className="hover:text-green-700">
            Login
          </a> */}
  
        </div>
  
      </nav>
  
    );
  }