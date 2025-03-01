import { Eye, Send, Bookmark as BookmarkSimple } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 p-8 max-h-[100dvh] w-full overflow-y-scroll ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Welcome back, Alex! 👋</h1>
        <p className="text-gray-600">
          Here's what's happening with your job search
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm">Active Applications</span>
            <span className="bg-blue-50 p-2 rounded-full">
              <Send size={18} className="text-blue-500" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">12</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm">Completed Projects</span>
            <span className="bg-blue-50 p-2 rounded-full">
              <BookmarkSimple size={18} className="text-blue-500" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm">Profile Views</span>
            <span className="bg-blue-50 p-2 rounded-full">
              <Eye size={18} className="text-blue-500" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">156</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Frontend Developer</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <BookmarkSimple size={18} />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-2">TechCorp Inc.</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>$30-40/hr</span>
                  <span className="mx-2">•</span>
                  <span>Remote</span>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                    Quick Apply
                  </button>
                  <button className="text-gray-700 px-4 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Notifications</h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="text-sm">
                    Your application for "Frontend Developer" was viewed
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="text-sm">
                    You have a new message from Design Studio X
                  </p>
                  <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
                <div>
                  <p className="text-sm">Profile completion reminder</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">JavaScript</span>
                    <span className="text-sm">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">React</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">UI Design</span>
                    <span className="text-sm">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
