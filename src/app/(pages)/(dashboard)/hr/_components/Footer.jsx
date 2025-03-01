import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-gray-700">
      <div className="container mx-auto flex justify-between items-start">
        {/* Logo & tagline */}
        <div className="w-1/4">
          <h2 className="text-xl font-bold text-purple-600">LOGO</h2>
          <p className="mt-2 text-sm">Find your dream internship and kickstart your career journey with us.</p>
        </div>

        {/* Links section */}
        <div className="w-3/4 flex justify-between">
          <div>
            <h3 className="font-bold">For Students</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Browse Internships</a></li>
              <li><a href="#" className="hover:underline">Career Resources</a></li>
              <li><a href="#" className="hover:underline">Resume Builder</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">For Employers</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Post Internship</a></li>
              <li><a href="#" className="hover:underline">Talent Search</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




