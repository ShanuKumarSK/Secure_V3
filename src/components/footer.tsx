// components/Footer.tsx
'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-800 to-gray-900 text-gray-300 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-600 pb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">SECURE</h3>
            <p className="text-sm leading-6">
              Ministry of Rural Development,<br />
              Government of India<br />
              <span className="font-semibold">Email:</span> <a href="mailto:secure@nic.in" className="text-blue-400 hover:underline">secure@nic.in</a>
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-md font-semibold text-white mb-2">Links</h4>
            <Link href="/" className="hover:text-white hover:underline">Home</Link>
            <Link href="/nrega" className="hover:text-white hover:underline">NREGA</Link>
            <Link href="/mord" className="hover:text-white hover:underline">MoRD</Link>
          </div>

          {/* Right Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-md font-semibold text-white mb-2">Resources</h4>
            <Link href="/reports" className="hover:text-white hover:underline">SECURE Reports</Link>
            <Link href="/disclaimer" className="hover:text-white hover:underline">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 pt-6 gap-2">
          <div>
            © Copyright <span className="font-semibold text-white">Ministry of Rural Development, Government of India</span>. All rights reserved.
          </div>
          <div>
            Developed by <a href="https://kerala.nic.in" target="_blank" className="hover:text-white hover:underline">NIC Kerala</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
