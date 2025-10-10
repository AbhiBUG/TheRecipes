import React, { useState } from "react";

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="mt-12 flex flex-col gap-5 mx-10">
      {/* --- Profile Info --- */}
      <div className="PersonalInfo mt-[100px] flex flex-row gap-[80px]">
        <div className="ProfilePicture">
          <img
            src="https://via.placeholder.com/250"
            alt="Profile"
            className="rounded-full border-[20px] border-white shadow-xl h-[250px] w-[250px]"
          />
        </div>

        <div className="Info flex flex-col">
          <p className="text-[60px] font-semibold">{user}</p>
          <span className="flex flex-row gap-5 text-[20px]">
            <span>12 Posts</span>
            <span>1.2k Followers</span>
            <span>300 Following</span>
          </span>
          <div className="text-[20px]">
          <p className="">About</p>
          </div>
        </div>
      </div>

      {/* --- My Posts Tabs --- */}
      <div className="myPosts w-full">
        <div className="flex flex-row justify-center border-t-2 border-b-2 border-black px-[150px] text-[20px] font-semibold">
          {["posts", "videos", "audios"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mx-10 py-4 uppercase transition-all duration-200 
              ${activeTab === tab ? "text-black border-b-4 border-black" : "text-gray-400 hover:text-black"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- Content Area --- */}
        <div className="mt-10 flex justify-center items-center h-[300px]">
          {activeTab === "posts" && <p className="text-xl text-gray-600">📸 User’s posts will appear here.</p>}
          {activeTab === "videos" && <p className="text-xl text-gray-600">🎥 User’s videos will appear here.</p>}
          {activeTab === "audios" && <p className="text-xl text-gray-600">🎧 User’s audios will appear here.</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
