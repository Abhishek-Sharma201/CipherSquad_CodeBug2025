"use client";

import React, { useState, useEffect } from "react";
import JobCard from "../_components/JobCard";
import { apiURL } from "@/constants";
import { toast } from "react-toastify";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const jobData = [{
    
  }];

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Form data for creating a new job
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    type: "Office", // "Office" or "Remote"
    location: "Mumbai",
    requirements: "",
    responsibility: "",
    tags: "", // Will store comma-separated tags
  });

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${apiURL}/api/job/get`);
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();

        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          toast.error("API response is not an array");
          setJobs([]);
        }
      } catch (error) {
        toast.error("Error fetching jobs: " + error.message);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs by title
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // Open/Close Modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle Form Input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create Job (POST request)
  const handleCreateJob = async (e) => {
    e.preventDefault();

    // Convert comma-separated tags into an array
    const tagArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    try {
      const response = await fetch(`${apiURL}/api/job/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tags: tagArray,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Job created successfully!");

      // Option 1: Re-fetch all jobs
      // setLoading(true);
      // fetchJobs(); // Make sure fetchJobs is accessible or re-run your effect

      // Option 2: Simply prepend the new job to the list
      setJobs((prevJobs) => [data.job, ...prevJobs]);

      // Reset form & close modal
      setFormData({
        title: "",
        description: "",
        salary: "",
        type: "Office",
        location: "Mumbai",
        requirements: "",
        responsibility: "",
        tags: "",
      });
      handleCloseModal();
    } catch (error) {
      toast.error("Error creating job: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-[100dvh] overflow-y-scroll ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Manage Your Posted Jobs
      </h2>

      {/* Add Job Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Add Job
        </button>
      </div>

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
          {/* {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <div className="text-center col-span-3 text-gray-500">
              <p>No jobs found 😢</p>
              <p className="text-sm mt-1">
                Try searching for a different job title.
              </p>
            </div>
          )} */}
        </div>
      )}

      {/* Modal for Creating a New Job */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Create New Job
            </h2>
            <form onSubmit={handleCreateJob} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 w-full p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  className="border border-gray-300 w-full p-2 rounded"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Salary
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 w-full p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="border border-gray-300 w-full p-2 rounded"
                >
                  <option value="Office">Office</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="border border-gray-300 w-full p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={2}
                  required
                  className="border border-gray-300 w-full p-2 rounded"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Responsibilities
                </label>
                <textarea
                  name="responsibility"
                  value={formData.responsibility}
                  onChange={handleInputChange}
                  rows={2}
                  required
                  className="border border-gray-300 w-full p-2 rounded"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="e.g. JavaScript, React, Node.js"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="ml-2 px-4 py-2 rounded shadow border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
