"use client";
import { useState } from "react";

export default function ChooseRole() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-black">Choose Your Role</h2>
      <div className="flex gap-6">
        <div
          className={`p-6 border rounded-lg shadow-md cursor-pointer transition-all w-64 text-center ${selectedRole === "student" ? "border-blue-500 bg-blue-50" : "bg-white"
            }`}
          onClick={() => setSelectedRole("student")}
        >
          <div className="text-blue-500 text-3xl mb-2">🎓</div>
          <h3 className="font-medium text-lg text-slate-900">I'm a Student</h3>
          <p className="text-sm text-gray-600">
            Find freelance gigs, internships, and jobs that match your skills and schedule
          </p>
        </div>
        <div
          className={`p-6 border rounded-lg shadow-md cursor-pointer transition-all w-64 text-center ${selectedRole === "recruiter" ? "border-blue-500 bg-blue-50" : "bg-white"
            }`}
          onClick={() => setSelectedRole("recruiter")}
        >
          <div className="text-blue-500 text-3xl mb-2">🏢</div>
          <h3 className="font-medium text-lg text-slate-600">I'm a Recruiter</h3>
          <p className="text-sm text-gray-600">
            Post jobs and connect with talented students for your projects and positions
          </p>
        </div>
      </div>
      <button
        className={`mt-6 px-6 py-2 text-white rounded-lg transition ${selectedRole ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
          }`}
        disabled={!selectedRole}
      >
        Continue
      </button>
      <button className="mt-2 text-blue-500 hover:underline">&larr; Back</button>
    </div>
  );
}
