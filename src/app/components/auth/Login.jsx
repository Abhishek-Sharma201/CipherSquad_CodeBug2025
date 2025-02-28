"use client";
import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        setEmail("")
        console.log("email",email);
        
        setPassword("")
        console.log("password",password);
        
    }


    return (
        <div className='bg-[#FFFFFF] min-h-screen text-black flex flex-col md:flex-row items-center justify-center p-4'>
            <div className='flex flex-col p-6 md:p-16 w-full md:w-1/2'>
                <form
                    className='p-6 md:p-10 mt-4 w-full'
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <h1 className='text-black font-semibold text-3xl  md:text-4xl text-center md:text-left font-sans'>Welcome Back!!</h1>
                    <div className='mt-7 relative w-full'>
                        <label className='mt-5'>Email</label>
                        <br />
                        <Mail className='absolute left-3 top-12 text-gray-500' size={20} />
                        <input type="email"
                            placeholder=' email@gmail.com'
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10' />
                    </div>
                    <div className='mt-7 relative w-full'>
                        <label className='mt-5'>Password</label>
                        <br />
                        <Lock className='absolute left-3 top-12 text-gray-500' size={20} />
                        <input
                            type="password"
                            placeholder='Enter your password'
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            className='border-[#757575] h-14 mt-2 border-[1px] rounded-full w-full p-2 pl-10' />
                    </div>
                    <div className='text-right mt-4'>
                        <h3 className='text-[#616161] cursor-pointer'>Forgot Password?</h3>
                    </div>
                    <button className='border-[#757575] rounded-full mt-4 border-none bg-[#0866FF] text-[#FFFFFF] w-full h-12'>Login</button>
                    <p className='text-center mt-4 text-gray-400'>-or-</p>
                    <h4 className='text-gray-400 text-center mt-4'>Don't have an account? <span className='text-[#0866FF] cursor-pointer'>Sign up</span></h4>
                </form>
            </div>
            <div className='hidden md:flex justify-center items-center w-1/2'>
                <img src="https://img.freepik.com/premium-vector/man-is-sitting-with-laptop-concept-illustration-working-freelancing-studying-education_572614-344.jpg?ga=GA1.1.222564756.1739371277&semt=ais_hybrid" alt="Illustration" className='w-full max-w-md' />
            </div>
        </div>
    );
};

export default Login;
