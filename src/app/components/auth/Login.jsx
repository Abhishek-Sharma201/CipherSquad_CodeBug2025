"use client";
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await login(formData);
    if (response.success) {
      toast.success("Login successful!");
      router.push("/student");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-black flex flex-col md:flex-row items-center justify-center p-4">
      <div className="flex flex-col p-6 md:p-16 w-full md:w-1/2">
        <form className="p-6 md:p-10 mt-4 w-full" onSubmit={submitHandler}>
          <h1 className="text-black font-semibold text-3xl md:text-4xl text-center md:text-left font-sans">
            Welcome Back!!
          </h1>
          <div className="mt-7 relative w-full">
            <label className="mt-5">Email</label>
            <br />
            <Mail className="absolute left-3 top-12 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="email@gmail.com"
              required
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>
          <div className="mt-7 relative w-full">
            <label className="mt-5">Password</label>
            <br />
            <Lock className="absolute left-3 top-12 text-gray-500" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
              className="border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10"
            />
          </div>
          <div className="text-right mt-4">
            <h3 className="text-[#616161] cursor-pointer">Forgot Password?</h3>
          </div>
          <button
            type="submit"
            className="rounded-full mt-4 bg-[#0866FF] text-white w-full h-12 hover:bg-[#0654CC] transition-colors"
          >
            Login
          </button>
          <h4 className="text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <span className="text-[#0866FF] cursor-pointer">Sign up</span>
          </h4>
        </form>
      </div>
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img
          src="https://img.freepik.com/premium-vector/man-is-sitting-with-laptop-concept-illustration-working-freelancing-studying-education_572614-344.jpg?ga=GA1.1.222564756.1739371277&semt=ais_hybrid"
          alt="Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Login;
