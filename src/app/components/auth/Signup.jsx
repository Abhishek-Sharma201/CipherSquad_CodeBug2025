"use client";
import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setEmail("")
        console.log("email", email);
        setPassword("")
        console.log("password", password);
        setUsername("")
        console.log("username", username);

    }

    return (
        <div className='bg-[#FFFFFF] flex flex-col md:flex-row h-screen text-black p-4 md:p-0'>
            <div className='mt-10 md:mt-16 md:ml-16 flex justify-center'>
                <img
                    src="https://img.freepik.com/premium-vector/online-job-interview-concept-man-is-talking-his-future-employee_162329-435.jpg?ga=GA1.1.222564756.1739371277&semt=ais_hybrid"
                    alt=""
                    className='w-72 md:w-auto'
                />
            </div>
            <div className='md:ml-44 mt-10 md:mt-20 flex justify-center w-full'>
                <form className='w-full max-w-md'
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <h1 className='text-3xl md:text-5xl text-center'>Create Account</h1>
                    <div className='mt-4 relative'>
                        <label className='mt-5'>Username</label>
                        <br />
                        <User className='absolute left-3 top-12 text-gray-500' />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            placeholder='Username'
                            required
                            className='border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10'
                        />
                    </div>
                    <div className='mt-4 relative'>
                        <label className='mt-5'>Email</label>
                        <br />
                        <Mail className='absolute left-3 top-12 text-gray-500' />
                        <input
                            type="email"
                            placeholder=' email@gmail.com'
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10'
                        />
                    </div>
                    <div className='mt-4 relative'>
                        <label className='mt-5'>Password</label>
                        <br />
                        <Lock className='absolute left-3 top-12 text-gray-500' />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder='Enter your password'
                            required={"@./"}
                            className='border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10'
                        />
                    </div>
                    <button className='w-full h-12 bg-[#0866FF] rounded-full mt-10 text-white cursor-pointer'>Create Account</button>
                    <p className='text-gray-400 mt-5 text-center'>-or-</p>
                    <h3 className='mt-4 text-gray-400 text-center'>Already have an account <span className='text-[#0866FF] cursor-pointer'>Sign in</span></h3>
                </form>
            </div>
        </div>
    );
}

export default Signup;
