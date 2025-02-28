import React from "react";

const Sprofile = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-transparent p-6 text-black">
                <button className="text-blue-500 mb-4 ">&larr; Back</button>
                <h2 className="text-3xl font-semibold mb-2">Complete Your Student Profile</h2>
                <p className="text-gray-600 mb-4">Let's get started with your professional journey</p>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name*</label>
                        <input type="text" placeholder="Enter your full name" className="w-full p-2 border rounded mt-1" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address*</label>
                        <input type="email" placeholder="john.doe@example.com" className="w-full p-2 border rounded mt-1" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">College/University*</label>
                        <input type="text" placeholder="Start typing your institution name" className="w-full p-2 border rounded mt-1" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Expected Graduation Year*</label>
                        <select className="w-full p-2 border rounded mt-1" required>
                            <option value="">Select year</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Primary Skillset*</label>
                        <textarea className="w-full p-2 border rounded mt-1" rows="3" placeholder="Web Development, UI/UX Design, etc." required></textarea>
                    </div>

                    <div className="mb-4 border-dashed border-2 border-gray-300 p-4 text-center">
                        <p className="text-gray-600">Upload your resume</p>
                        <p className="text-gray-500 text-sm">PDF or DOC up to 10MB</p>
                        <input type="file" className="mt-2" />
                    </div>

                    <div className="flex justify-between items-center">
                        <button type="button" className="text-blue-500">Skip for now</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sprofile;

