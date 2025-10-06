import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSmile } from "react-icons/ai";
import { BsImage, BsCalendarEvent } from "react-icons/bs";
import { HiOutlineCog } from "react-icons/hi";

const Create = ({ showModal, user }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cuisine, setCuisine] = useState("Other");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cookingTime, setCookingTime] = useState(0);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleAddRecipe = async () => {
    try {
      // For now backend expects JSON with image_url as string
      // If you implement file upload in backend later, you can use FormData
      const recipeData = {
        title,
        description,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps: steps.split("\n").map((s) => s.trim()),
        image_url: file ? "https://via.placeholder.com/150" : null, // temporary
        cuisine,
        difficulty,
        cooking_time: parseInt(cookingTime, 10) || 0,
      };

      const response = await fetch(
        "https://recipemanagmentbackend-1.onrender.com/recipe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(recipeData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Recipe added successfully");
        showModal(false);
      } else {
        alert(data.error || "Failed to add recipe");
      }
    } catch (err) {
      console.error("Error adding recipe:", err);
      alert("Error adding recipe. Try again.");
    }
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
            <span className="text-sm text-gray-500">Post a Recipe</span>
          </div>
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          className="border border-gray-300 rounded px-2 py-1 outline-none w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          className="border border-gray-300 rounded px-2 py-1 outline-none resize-none w-full min-h-[50px]"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          className="border border-gray-300 rounded px-2 py-1 outline-none resize-none w-full min-h-[50px]"
          rows={2}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        {/* Steps */}
        <textarea
          placeholder="Steps (new line per step)"
          className="border border-gray-300 rounded px-2 py-1 outline-none resize-none w-full min-h-[50px]"
          rows={3}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        {/* Other info */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Cuisine"
            className="border border-gray-300 rounded px-2 py-1 outline-none w-full"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cooking Time (min)"
            className="border border-gray-300 rounded px-2 py-1 outline-none w-24"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded px-2 py-1 outline-none"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-blue-600">
            <BsImage size={20} /> <span>Add Image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          {file && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="max-h-60 w-full object-contain rounded"
              />
              <p className="text-sm text-green-600 mt-1">📁 {file.name}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300"
            onClick={() => showModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            onClick={handleAddRecipe}
          >
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
