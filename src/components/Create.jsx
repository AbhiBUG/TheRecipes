import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSmile } from "react-icons/ai";
import { BsImage, BsCalendarEvent } from "react-icons/bs";
import { HiOutlineCog } from "react-icons/hi";

const Create = ({ showModal, user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleAdd = () => {
    console.log("Post title:", title);
    console.log("Post content:", content);
    if (file) console.log("Uploaded file:", file.name);
    showModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl w-[400px] max-w-full p-4 flex flex-col gap-4 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={() => showModal(false)}
        >
          <AiOutlineClose size={20} />
        </button>

        {/* User info */}
        <div className="flex items-center gap-2">
          <img
            src={user?.avatar || "https://via.placeholder.com/40"}
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{user?.name || "User Name"}</span>
            <span className="text-sm text-gray-500">Post to Anyone</span>
          </div>
        </div>

        {/* Title input */}
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded px-2 py-1 outline-none w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />



        {/* File upload */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-blue-600">
            <BsImage size={20} />
            <span>Add Image / Video</span>
            <input
              type="file"
              className="hidden"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </label>

          {/* Display selected file */}
          {file && (
            <div className="mt-2">
              {file.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="max-h-60 w-full object-contain rounded"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="max-h-60 w-full rounded"
                />
              )}
              <p className="text-sm text-green-600 mt-1">📁 {file.name}</p>
            </div>
          )}
        </div>
                {/* Description textarea */}
        <textarea
          placeholder="Define your Recipe"
          className="border border-gray-300 rounded px-2 py-1 outline-none resize-none w-full text-gray-700 placeholder-gray-400 min-h-[50px]"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Other icons */}
        <div className="flex gap-3">
          <BsCalendarEvent size={20} className="cursor-pointer text-gray-600 hover:text-black" />
          <HiOutlineCog size={20} className="cursor-pointer text-gray-600 hover:text-black" />
          <AiOutlineSmile size={20} className="cursor-pointer text-gray-600 hover:text-black" />
        </div>

        {/* Add / Cancel buttons */}
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300"
            onClick={() => showModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            onClick={handleAdd}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
