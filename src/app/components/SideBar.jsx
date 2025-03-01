import React from "react";
import {
  Home,
  Briefcase,
  MessageSquare,
  User,
  Settings,
  Bookmark as BookmarkSimple,
  Eye,
  Send,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideBar = ({ activeTab, setActiveTab }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const Router = useRouter();
  const { pathname } = Router;

  const router = useRouter();

  const targetRoute =
    pathname === "/student"
      ? "/hr"
      : pathname === "/hr"
      ? "/student"
      : "/hr";

  const handleClick = async () => {
    const res = await logout();
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="w-60 bg-white h-screen border-r border-gray-200">
      <div className="p-4">
        {/* <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-600 text-white font-bold text-2xl p-2 rounded">
            <span>JG</span>
          </div>
        </div> */}
        <div className="flex items-center bg-white rounded-xl shadow-md mb-[1rem]">
          <div className="text-indigo-600 font-bold text-[1.2rem] flex items-center ">
            <GraduationCap className="h-8 w-8 mr-2" />
            <span>Campus Hire</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-8 px-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">
              {isAuthenticated ? user?.name : "You must log in first."}
            </h3>
            <p className="text-xs text-gray-500">
              {" "}
              {isAuthenticated ? user?.email : "You must log in first."}
            </p>
          </div>
        </div>

        <nav>
          <ul className="space-y-1">
            <li
              onClick={() => setActiveTab("Dashboard")}
              className={` cursor-pointer flex items-center space-x-3 p-3 rounded-lg ${
                activeTab == "Dashboard"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Home size={20} />
              <span className="font-medium">Dashboard</span>
            </li>
            <li
              onClick={() => setActiveTab("Jobs")}
              className={` cursor-pointer flex items-center space-x-3 p-3 rounded-lg ${
                activeTab == "Jobs"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase size={20} />
              <span>Jobs</span>
            </li>
            <li
              onClick={() => setActiveTab("Messages")}
              className={` cursor-pointer flex items-center space-x-3 p-3 rounded-lg ${
                activeTab == "Messages"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </li>
            <li
              onClick={() => setActiveTab("Profile")}
              className={` cursor-pointer flex items-center space-x-3 p-3 rounded-lg ${
                activeTab == "Profile"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </li>
            {/* <li
              onClick={() => setActiveTab("Settings")}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                activeTab == "Settings"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </li> */}
          </ul>
        </nav>
        <Link
          href={targetRoute}
          className=" ml-[3.5rem] mt-[14rem] text-[.9rem] text-white bg-yellow-500 rounded-md px-2 py-1 self-center cursor-pointer"
        >
          Switch
        </Link>
        <button
          onClick={handleClick}
          className=" ml-[3.5rem] mt-[18rem] text-[.9rem] text-white bg-red-600 rounded-md px-2 py-1 self-center cursor-pointer "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
