import React from 'react'
import { GraduationCap } from 'lucide-react'
const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white z-10'>
            <nav className="flex justify-between items-center py-4 px-6 md:px-12 ">
                <div className="flex items-center bg-white rounded-xl shadow-md">
                    <div className="text-indigo-600 font-bold text-2xl flex items-center ">
                        <GraduationCap className="h-8 w-8 mr-2" />
                        <span>Campus Hire</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50 transition">
                        Sign In
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
