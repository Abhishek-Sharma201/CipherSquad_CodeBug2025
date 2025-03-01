import {
  Globe,
  Bookmark,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Jobposting({ job }) {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header with Post Job button */}
      <header className="flex justify-between items-center py-4 border-b mb-6">
        <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
          logo
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium">
          Post a Job
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - 2/3 width on desktop */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Software Engineer Intern
              </h1>
              <div className="flex items-center text-gray-600 mt-1 text-sm gap-2">
                <span>TechCorp</span>
                <span>•</span>
                <span>San Francisco, CA (Hybrid)</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="flex items-center text-green-600 text-sm">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                Active
              </span>
            </div>
          </div>

          {/* Job details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded-md p-4">
              <div className="text-sm text-gray-500 mb-1">Job Type</div>
              <div className="font-medium">Internship</div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-sm text-gray-500 mb-1">Duration</div>
              <div className="font-medium">3 months</div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-sm text-gray-500 mb-1">Stipend</div>
              <div className="font-medium">$25-30/hour</div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-sm text-gray-500 mb-1">Experience</div>
              <div className="font-medium">Entry Level</div>
            </div>
          </div>

          {/* About the Role */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">About the Role</h2>
            <p className="text-gray-700">
              Join our dynamic engineering team for a summer internship
              opportunity where you'll work on real-world projects and gain
              hands-on experience with modern technologies.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {[
                "Develop and maintain web applications using React and Node.js",
                "Collaborate with senior engineers on feature implementation",
                "Write clean, maintainable, and efficient code",
                "Participate in code reviews and team meetings",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-blue-500 mr-3 mt-1"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-3">
              {[
                "Currently pursuing a BS/MS in Computer Science or related field",
                "Strong foundation in computer science fundamentals",
                "Experience with JavaScript and modern web technologies",
                "Excellent problem-solving and communication skills",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-blue-500 mr-3 mt-1"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="border-t py-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">
                  What is the application process?
                </h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-gray-700">
                The process includes an initial application review, technical
                assessment, and 2-3 rounds of interviews with the engineering
                team.
              </div>
            </div>

            <div className="border-t py-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">When does the internship start?</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-gray-700">
                The internship is scheduled to begin in June 2024 and will last
                for 3 months.
              </div>
            </div>
          </div>

          {/* Similar Opportunities */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Similar Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Frontend Developer Intern",
                  company: "StartupX",
                  location: "Remote",
                  salary: "$20-25/hour",
                },
                {
                  title: "Backend Engineer Intern",
                  company: "TechGiant",
                  location: "New York, NY",
                  salary: "$28-32/hour",
                },
                {
                  title: "Full Stack Developer Intern",
                  company: "InnovateCo",
                  location: "Seattle, WA",
                  salary: "$22-27/hour",
                },
              ].map((job, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-medium mb-1">{job.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    {job.company} • {job.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{job.salary}</span>
                    <button className="text-sm text-gray-700 px-2 py-1 border rounded">
                      Quick Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="lg:col-span-1">
          <div className="border rounded-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center text-white mr-4">
                Tech
              </div>
              <div>
                <h3 className="font-bold">TechCorp</h3>
                <div className="text-sm text-gray-600">
                  Technology • 1000-5000 employees
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              TechCorp is a leading technology company specializing in cloud
              computing and enterprise software solutions.
            </p>
            <div className="flex space-x-2 mb-4">
              <button className="p-2 border rounded-md">
                <Linkedin className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 border rounded-md">
                <Globe className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="border rounded-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">Application Deadline</div>
              <div className="text-red-500 font-medium">14 days left</div>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-md font-medium mb-3">
              Apply Now
            </button>
            <button className="w-full border py-3 rounded-md font-medium flex items-center justify-center">
              <Bookmark className="h-5 w-5 mr-2" />
              Save Job
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-medium mb-4">For Students</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">Browse Jobs</Link>
              </li>
              <li>
                <Link href="#">Career Resources</Link>
              </li>
              <li>
                <Link href="#">Resume Builder</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">For Employers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">Post a Job</Link>
              </li>
              <li>
                <Link href="#">Talent Search</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t text-sm text-gray-600">
          <div>© 2024 Student Jobs Platform. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
