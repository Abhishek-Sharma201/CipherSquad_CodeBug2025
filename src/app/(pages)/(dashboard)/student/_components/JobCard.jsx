import Link from "next/link";
import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className=" min-w-[350px] h-[max-content] bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <p className="text-blue-600 font-bold mt-3">
        {" "}
        <sup>$</sup> {job.salary} <sub>/ month</sub>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/student/${job._id}`}
        className="mt-[2rem] px-2 w-full text-[.6rem] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default JobCard;
