import React from 'react'
import { GraduationCap, Facebook,Twitter,Instagram,Linkedin } from 'lucide-react'
const Footer = () => {
    return (
        <div>
            <footer className="bg-white py-12 px-6 md:px-12">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="col-span-1 bg-white rounded-lg shadow-md">
                            <div className="text-indigo-600 font-bold text-xl flex items-center mb-4">
                                <GraduationCap className="h-6 w-6 mr-2" />
                                <span>StudentGigs</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                Connecting talented students with amazing opportunities
                                worldwide.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="col-span-1 bg-white rounded-lg shadow-md text-center">
                            <h3 className="font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Browse Jobs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Find Internships
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Build Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Skill Assessment
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 bg-white rounded-lg shadow-md text-center">
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500 text-sm"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute text-center w-[1400px] border-t border-gray-200 mt-12 pt-8  text-sm text-gray-500">
                        © 2024 StudentGigs. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
