import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Recipe = () => {
  const { key } = useParams(); // recipe id from URL
  const [recipe, setRecipe] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recipe
  useEffect(() => {
    setLoading(true);
    fetch(`https://recipemanagmentbackend-1.onrender.com/recipes/${key}`)
      .then((res) => {
        if (!res.ok) throw new Error("Recipe not found");
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        // Fetch author if recipe has author_id
        if (data.author_id) {
          return fetch(`https://recipemanagmentbackend-1.onrender.com/users/${data.author_id}`);
        } else {
          return null;
        }
      })
      .then((res) => (res ? res.json() : null))
      .then((authorData) => setAuthor(authorData))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [key]);

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto">
      {/* Recipe title */}
      <h1 className="text-3xl font-extrabold mb-4">{recipe.title}</h1>

      {/* Recipe image */}
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-[400px] object-cover rounded-lg mb-4"
      />

      {/* Recipe details */}
      <p className="text-gray-700 mb-2">{recipe.description}</p>
      <p className="text-gray-500 mb-4">
        Cuisine: {recipe.cuisine} | Difficulty: {recipe.difficulty} | Time: {recipe.cooking_time} min
      </p>

      {/* Likes & Comments */}
      <div className="flex gap-4 mb-4">
        <button className="px-3 py-1 bg-red-500 text-white rounded">❤️ Like</button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">💬 Comment</button>
      </div>

      {/* Author info */}
      {author && (
        <div className="flex items-center gap-4 border-t pt-4">
          <img
            src={author.profile_image}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{author.name}</p>
            <p className="text-gray-500 text-sm">{author.about}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
