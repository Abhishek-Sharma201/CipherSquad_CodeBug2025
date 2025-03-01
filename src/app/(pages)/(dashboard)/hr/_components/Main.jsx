"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Footer from "./Footer";

const Main = () => {
  const internships = [
    {
      title: "UX/UI Design Intern",
      company: "Google",
      location: "Remote",
      type: ["Remote", "Full-time"],
      salary: "$2000-3000/month",
      duration: "6 months",
    },
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Seattle, WA",
      type: ["Hybrid", "Full-time"],
      salary: "$3000-4000/month",
      duration: "3 months",
    },
    {
      title: "Marketing Intern",
      company: "Apple",
      location: "Remote",
      type: ["Remote", "Part-time"],
      salary: "$1500-2500/month",
      duration: "4 months",
    },
    {
      title: "Data Science Intern",
      company: "Amazon",
      location: "New York, NY",
      type: ["Remote", "Full-time"],
      salary: "$2500-3500/month",
      duration: "6 months",
    },
    {
      title: "Product Design Intern",
      company: "Adobe",
      location: "San Francisco, CA",
      type: ["Hybrid", "Full-time"],
      salary: "$2000-3000/month",
      duration: "3 months",
    },
    {
      title: "Business Development Intern",
      company: "Salesforce",
      location: "Remote",
      type: ["Remote", "Part-time"],
      salary: "$1800-2800/month",
      duration: "4 months",
    },
    {
      title: "Cybersecurity Intern",
      company: "IBM",
      location: "Remote",
      type: ["Remote", "Full-time"],
      salary: "$2200-3200/month",
      duration: "5 months",
    },
    {
      title: "AI Research Intern",
      company: "OpenAI",
      location: "San Francisco, CA",
      type: ["Hybrid", "Full-time"],
      salary: "$3500-4500/month",
      duration: "6 months",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(internships.length / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const displayedInternships = filteredInternships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="bg-slate-100 h-full w-full text-black max-h-[100dvh] overflow-y-scroll ">
      {/* <div className="p-4">
        <h1 className="text-3xl font-bold py-2 ">Find Your Dream Internship</h1>
        <form className="h-fit bg-white border shadow-md rounded-md p-5">
          <div className="flex justify-evenly items-center">
            <div className="relative w-full flex justify-evenly">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 rounded-lg pl-10 border pr-4 "
                placeholder="Search Internship By Title, Company or Keyword"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-500"
                size={20}
              />
              <button className="bg-blue-200 w-40 h-10 text-blue-600 font-bold rounded ml-3">
                Filter
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5 gap-3">
            <select className="w-full p-2 border rounded mt-1">
              <option value="">All Locations</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Thane">Thane</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
            </select>
            <select className="w-full p-2 border rounded mt-1">
              <option value="">Duration</option>
              <option value="1-Month">1-Month</option>
              <option value="2-Month">2-Month</option>
              <option value="3-Month">3-Month</option>
            </select>
            <select className="w-full p-2 border rounded mt-1">
              <option value="">Category</option>
              <option value="Development & IT">Development & IT</option>
              <option value="Writing & Translation">
                Writing & Translation
              </option>
              <option value="Design & Creative">Design & Creative</option>
            </select>
            <select className="w-full p-2 border rounded mt-1">
              <option value="">Stipend Range</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="15k">15k</option>
            </select>
          </div>
        </form>
      </div> */}
      <div className="p-6 h-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
         Jobs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedInternships.map((internship, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg sm:text-2xl">
                {internship.title}
              </h3>
              <p className="mt-2">{internship.company}</p>
              <p className="text-gray-600">{internship.location}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-blue-600 bg-blue-200 rounded-full px-3 py-1">
                  {internship.type[0]}
                </span>
                <span className="text-green-600 bg-green-200 rounded-full px-3 py-1">
                  {internship.type[1]}
                </span>
              </div>
              <p className="mt-2">
                {internship.salary} • {internship.duration}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 w-full rounded">
                Quick Apply
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-l disabled:opacity-50"
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-r disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
