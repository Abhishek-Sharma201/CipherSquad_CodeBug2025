import React from 'react'
import BlurText from '../Reactbits/BlurText'
import SpotlightCard from "../Reactbits/SpotlightCard";
import StarBorder from '../Reactbits/StarBorder'
import { Briefcase, GraduationCap, BarChart2, FileText } from 'lucide-react';
import Link from 'next/link';

const Main = () => {

    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    return (
        <div>
            <section className="flex flex-col md:flex-row items-center bg-gray-50">
                <div className="w-full md:w-1/2 p-6 md:p-12 space-y-4">
                    <BlurText
                        text="Kickstart Your Career While in College!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-4xl mb-4 font-semibold"
                    />
                    <p className="text-gray-600 my-6">
                        Connect with top companies, build your portfolio, and kickstart your
                        career. Perfect for students and young professionals.
                    </p>
                    <button className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition">
                        <Link href={"/signup"}>Explore Opportunities</Link>
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="Students working on laptops"
                        className="w-full h-auto"
                    />
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 bg-gray-50">
                <div className="text-center mb-10">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-10">
                        Features
                    </p>
                    <h2 className="text-3xl font-bold mt-7">
                        Everything you need to succeed
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-8xl mx-auto">
                    <SpotlightCard
                        className="custom-spotlight-card border-none bg-white p-6 rounded shadow-xl text-center"
                        spotlightColor="rgba(0, 229, 255, 0.3)"
                    >
                        <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Job Opportunities</h3>
                        <p className="text-gray-600 text-sm">
                            Access thousands of remote jobs from top companies worldwide.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card border-none bg-white p-6 rounded shadow-xl text-center"
                        spotlightColor="rgba(255, 193, 7, 0.3)"
                    >
                        <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Skill-Based Matches</h3>
                        <p className="text-gray-600 text-sm">
                            Find jobs that match your career goals and skills.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card bg-white border-none p-6 rounded shadow-xl text-center"
                        spotlightColor="rgba(76, 175, 80, 0.3)"
                    >
                        <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                            <BarChart2 className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Post Your Work</h3>
                        <p className="text-gray-600 text-sm">
                            Share your projects and attract opportunities that match your
                            expertise.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card bg-white border-none p-6 rounded shadow-xl text-center"
                        spotlightColor="rgba(244, 67, 54, 0.5)"
                    >
                        <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Resume Building</h3>
                        <p className="text-gray-600 text-sm">
                            Create and showcase your best work to potential employers.
                        </p>
                    </SpotlightCard>
                </div>
            </section>

            <section className="py-12 px-6 md:px-12">
                <div className="text-center mb-12">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Success Stories
                    </p>
                    <h2 className="text-3xl font-bold mt-6">Hear from our community</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="Sarah Johnson"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Sarah Johnson</h4>
                                <p className="text-sm text-gray-600">UI/UX Design Intern</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "StudentGigs helped me land my dream internship at a top tech
                            company. The platform's portfolio tools were instrumental in
                            showcasing my work."
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="Michael Chen"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Michael Chen</h4>
                                <p className="text-sm text-gray-600">Frontend Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "The freelance opportunities on StudentGigs allowed me to build a
                            strong portfolio while earning during my studies. Highly
                            recommended!"
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-8 text-white">
                <div className="w-full mx-auto h-[20rem] border border-blue-400 rounded-md bg-blue-600 p-8 md:p-16">
                    <div className="text-center md:text-left">
                        <h1 className="text-lg md:text-4xl font-semibold text-white mt-5">
                            Ready to start your journey?
                        </h1>
                        <p className="mt-3 md:mt-5 text-blue-100 font-medium">
                            Join thousands of students finding amazing opportunities every
                            day.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end mt-6">

                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="cyan"
                            speed="5s">
                            Get started Now
                        </StarBorder>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
