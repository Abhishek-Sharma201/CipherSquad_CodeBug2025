"use client";

import React, { useState } from "react";
import { Mail, Lock, User, Phone, Link2, Code, Upload } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function App() {
  const { signup } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    bio: "",
    profile: {
      profileImage: "",
      contactInfo: {
        phone: "",
      },
      links: [
        {
          name: "",
          link: "",
        },
      ],
      skills: [],
      resume: "",
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      if (parent === "contactInfo") {
        setFormData({
          ...formData,
          profile: {
            ...formData.profile,
            contactInfo: {
              ...formData.profile.contactInfo,
              [child]: value,
            },
          },
        });
      } else if (parent === "links") {
        setFormData({
          ...formData,
          profile: {
            ...formData.profile,
            links: [
              {
                ...formData.profile.links[0],
                [child]: value,
              },
            ],
          },
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setPreviewUrl(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);

      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          profileImage: file,
        },
      });
    }
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        skills,
      },
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await signup(formData);
    if (response.success) {
      toast.success("Signup successful!");
      router.push("/login");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col md:flex-row h-screen text-black p-4 md:p-0">
      <div className="mt-10 md:mt-16 md:ml-16 flex justify-center">
        <img
          src="https://img.freepik.com/premium-vector/online-job-interview-concept-man-is-talking-his-future-employee_162329-435.jpg?ga=GA1.1.222564756.1739371277&semt=ais_hybrid"
          alt="Signup Illustration"
          className="w-72 md:w-auto"
        />
      </div>
      <div className="md:ml-44 mt-10 md:mt-20 flex justify-center w-full">
        <form className="w-full max-w-md" onSubmit={submitHandler}>
          <h1 className="text-3xl md:text-5xl text-center">Create Account</h1>

          <div className="mt-4 relative">
            <label className="mt-5">Username</label>
            <br />
            <User className="absolute left-3 top-12 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              required
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>

          <div className="mt-4 relative">
            <label className="mt-5">Email</label>
            <br />
            <Mail className="absolute left-3 top-12 text-gray-500" />
            <input
              type="email"
              placeholder="email@gmail.com"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>

          <div className="mt-4 relative">
            <label className="mt-5">Password</label>
            <br />
            <Lock className="absolute left-3 top-12 text-gray-500" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Select Role</label>
            <div className="mt-2 flex items-center">
              <input
                type="radio"
                name="role"
                value="Student"
                checked={formData.role === "Student"}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Student</span>
              <input
                type="radio"
                name="role"
                value="HR"
                checked={formData.role === "HR"}
                onChange={handleChange}
                className="ml-6 mr-2"
              />
              <span>HR</span>
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="mt-5">Bio</label>
            <br />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="border-[#757575] mt-2 border-[1px] rounded-lg w-full p-2"
              rows={3}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Profile Image</label>
            <div className="mt-2 flex flex-col items-center">
              {previewUrl && (
                <div className="mb-3">
                  <img
                    src={previewUrl}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#0866FF]"
                  />
                </div>
              )}
              <div className="relative w-full">
                <Upload className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border-[#757575] h-14 border-[1px] rounded-full w-full p-2 pl-10 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0866FF] file:text-white hover:file:bg-[#0654CC]"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="mt-5">Skills (comma-separated)</label>
            <br />
            <Code className="absolute left-3 top-12 text-gray-500" />
            <input
              type="text"
              name="skills"
              value={formData.profile.skills.join(", ")}
              onChange={handleSkillsChange}
              placeholder="JavaScript, React, Node.js"
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#0866FF] rounded-full mt-10 text-white cursor-pointer hover:bg-[#0654CC] transition-colors"
          >
            Create Account
          </button>

          <p className="text-gray-400 mt-5 text-center">-or-</p>
          <h3 className="mt-4 text-gray-400 text-center mb-10">
            Already have an account{" "}
            <span className="text-[#0866FF] cursor-pointer">Sign in</span>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default App;
