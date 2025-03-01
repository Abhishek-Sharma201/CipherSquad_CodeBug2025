"use client";
import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Sarah Johnson",
    title: "UI/UX Design Student",
    bio: "Final year design student passionate about creating intuitive user experiences. Seeking opportunities to apply my skills in real-world projects.",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    skills: ["UI Design X", "UX Research X", "Figma X"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md max-h-[100dvh] overflow-y-scroll ">
      <div className="flex flex-col items-center mt-10">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profilePicInput"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  profilePic: reader.result,
                }));
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <label htmlFor="profilePicInput" className="cursor-pointer">
          <img
            src={profile.profilePic || "https://via.placeholder.com/150"}
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
          />
        </label>
        <p className="text-sm text-gray-500 mt-2">
          Click to change profile picture
        </p>
      </div>
      <h1 className="mt-10 font-semibold text-2xl">Create Profile</h1>
      <p className="mt-2 text-sm text-gray-600">
        Update your profile information and portfolio
      </p>
      <div className="max-w-6xl  p-6 bg-white rounded-xl shadow-md mt-5">
        <div className="mt-4 space-y-3">
          <label className="text-[15px] text-gray-700">Full Name</label>
          <input
            className="border-[2px] w-full rounded px-2 py-1.5"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            type="text"
          />
          <label className="text-[15px] text-gray-700 block">
            Professional Title
          </label>
          <input
            className="border-[2px] w-full rounded px-2 py-1.5"
            name="title"
            value={profile.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="mt-12">
          <label className="block">Bio</label>
          <textarea
            className="w-full h-32 p-2 border rounded mt-3"
            name="bio"
            rows={3}
            value={profile.bio}
            onChange={handleChange}
          />
          <p className="text-[13px] text-gray-400 font-semibold mt-2">
            250 characters remaining
          </p>
        </div>
        <div>
          <h3 className="mt-12 font-semibold text-xl">Contact Information</h3>
          <div className="mt-5 space-y-4 flex flex-col">
            <label>Email Address</label>
            <input
              className="w-full p-2 border rounded-lg"
              value={profile.email}
              onChange={handleChange}
              type="email"
            />
            <label>Phone Number</label>
            <input
              className="w-full p-2 border rounded-lg"
              value={profile.phone}
              onChange={handleChange}
              type="text"
            />
            <label>LinkedIn Profile</label>
            <input
              className="w-full p-2 border rounded-lg"
              value={profile.linkedin}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>
        {/* <div className="mt-6">
          <h3 className="font-semibold text-xl">Skills & Expertise</h3>
          <input
            className="w-full p-2 border rounded-lg mt-4"
            type="text"
            placeholder="Search or add skills..."
          />
          <div className="mt-5 flex flex-wrap gap-4">
            {profile.skills.map((skills) => (
              <span
                key={skills}
                className="px-3 py-2 bg-gray-200 rounded-full text-sm"
              >
                {skills}
              </span>
            ))}
          </div>
          <button className="mt-5 border px-6 py-1 rounded-md bg-blue-600 text-white">
            Add Skills
          </button>
        </div> */}
        {/* <div className="mt-7">
          <h3 className="font-semibold text-xl">Resume</h3>
          <div className="md:mt-4 p-20 border-[3px] border-dashed rounded-lg text-center">
            <p>
              Drag and drop your resume here or{" "}
              <span className="text-blue-500 cursor-pointer">Browse Files</span>
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX (Max: 5MB)
            </p>
          </div>
        </div> */}
        <div>
          <h3 className="mt-6 font-semibold text-xl">Job Post</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            <div className="p-10 md:p-20 border-[2px] rounded text-center">
              Ecommerce App Redesign
            </div>
            <div className="p-10 md:p-20 border-[2px] rounded text-center">
              Food Delivery App UI
            </div>
            <div className="flex items-center justify-center p-10 md:p-20 border-[2px] border-dashed rounded">
              <button>
                +<br />
                Add New Project
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-end px-3 gap-4">
          <button className="px-4 py-2 border-[2px] border-blue-400 text-blue-600 rounded">
            Discard
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
