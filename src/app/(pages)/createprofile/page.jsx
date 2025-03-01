"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const { saveProfile } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    bio: "",
    profile: {
      profileImage: null,
      contactInfo: {
        phone: "",
      },
      links: [], // Stores objects with name and link
      skills: [],
      resume: null,
    },
  });

  const [newLinkName, setNewLinkName] = useState(""); // New state for link name
  const [newLink, setNewLink] = useState(""); // State for link URL
  const [newSkill, setNewSkill] = useState("");

  const handleData = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage" && files) {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          profileImage: files[0],
        },
      });
    } else if (name === "resume" && files) {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          resume: files[0],
        },
      });
    } else if (name === "phone") {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          contactInfo: {
            ...formData.profile.contactInfo,
            phone: value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Add a new link with name and URL
  const addLink = () => {
    if (newLinkName.trim() !== "" && newLink.trim() !== "") {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          links: [
            ...formData.profile.links,
            { name: newLinkName, link: newLink }, // Store both name and link
          ],
        },
      });
      setNewLinkName("");
      setNewLink("");
    }
  };

  // Remove a link
  const removeLink = (index) => {
    const updatedLinks = [...formData.profile.links];
    updatedLinks.splice(index, 1);

    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        links: updatedLinks,
      },
    });
  };

  // Add a new skill
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          skills: [...formData.profile.skills, newSkill],
        },
      });
      setNewSkill("");
    }
  };

  // Remove a skill
  const removeSkill = (index) => {
    const updatedSkills = [...formData.profile.skills];
    updatedSkills.splice(index, 1);

    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        skills: updatedSkills,
      },
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
    try {
      const response = await saveProfile(formData);
      if (response.success) {
        toast.success("Profile created!");
        router.push("/createprofile");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bio Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleData}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Tell us about yourself"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleData}
          />
          {formData.profile.profileImage && (
            <p>Selected: {formData.profile.profileImage.name}</p>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.profile.contactInfo.phone}
            onChange={handleData}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Links */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Links
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newLinkName}
              onChange={(e) => setNewLinkName(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
              placeholder="Link Name (e.g., LinkedIn, Portfolio)"
            />
            <input
              type="url"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
              placeholder="Add a link (website, social media, etc.)"
            />
            <button
              type="button"
              onClick={addLink}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add
            </button>
          </div>

          {formData.profile.links.length > 0 && (
            <ul className="mt-2 space-y-1">
              {formData.profile.links.map((link, index) => (
                <li
                  key={index}
                  className="flex justify-between px-3 py-2 bg-gray-50 rounded-md"
                >
                  <span className="text-sm truncate">
                    <strong>{link.name}: </strong>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {link.link}
                    </a>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
              placeholder="Add a skill"
            />
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add
            </button>
          </div>

          {formData.profile.skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                >
                  <span className="text-sm">{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="ml-2 text-red-500"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
