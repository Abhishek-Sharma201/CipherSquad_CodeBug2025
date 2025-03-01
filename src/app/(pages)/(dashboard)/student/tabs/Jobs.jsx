"use client";

import React, { useState, useEffect } from "react";
import JobCard from "../_components/JobCard";
import { apiURL } from "@/constants";
import { toast } from "react-toastify";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${apiURL}/api/job/get`);
        if (!res.ok) {
          throw new Error("Failed to fetch Jobs");
        }
        const data = await res.json();
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          toast.error("API response is not an array:", data);
          setJobs([]);
        }
      } catch (error) {
        toast.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Always filter based on the jobs array
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Explore Job Opportunities
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by job title..."
          className="border border-gray-300 p-3 w-full max-w-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* Job Listings */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <div className="text-center col-span-3 text-gray-500">
              <p>No jobs found 😢</p>
              <p className="text-sm mt-1">
                Try searching for a different job title.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
