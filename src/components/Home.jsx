import React from 'react'
import search from '../assets/search.svg';
import ImageBlock from './ImageBlock';
import { useNavigate } from 'react-router-dom';
// import data from '../data/data.json'
import { useEffect, useState} from 'react';

const Home = () => {

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://recipemanagmentbackend-1.onrender.com/recipes')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log('Fetched recipes:', data);
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch recipes:', err);
        setError('Failed to fetch recipes');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

const handleCard = (id)=>
{
  // setRecipeKey(key);
  navigate(`/recipe/${id}`, { state: { recipes } });
}

    const cards = ["Card1","Card2","Card3","Card4"];
  return (
    
      
                <div className="flex flex-col h-full gap-4">
                        <div className="Searchbar flex justify-end">
                            
                            <div className="bg-white items-center justify-center flex flex-row shadow">
                            <input type="text" placeholder="Search" className="p-2 shadow-inner m-1"/>
                            <img src={search} className="h-8"></img>
                            
                            </div>
                        </div>
                        <div className="imageBlocks flex flex-row h-[100px]  justify-center runded-xl bg-blue-950">
                        <ImageBlock/>
        
                            {/* <h1>Hello</h1> 1080X1080 img with 240X240 per block 4x4 blocks */}
                        </div>




      {/* Recipe Cards
      <div className="cards grid grid-cols-4 gap-10 mt-10 h-full">
        {data.map((recipe) => (
          <div key={recipe.id} className="bg-white p-2 shadow flex flex-col gap-3">
            <div className="img h-[200px] w-auto shadow-xl">
              <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover"/>
            </div>
            <div className="Recipeinfo">
              <h2 className="font-bold">{recipe.title}</h2>
              <p className="text-sm text-gray-600">By {recipe.author}</p>
            </div>
            <div className="performance flex flex-row justify-between">
              <div className="Likes">{recipe.likes} ❤️</div>
              <div className="rightside flex flex-row justify-end">
                <div className="Comments">0 💬</div>
              </div>
            </div>
          </div>
        ))}
      </div> */}



{/* Recipe Cards */}
{/* Recipe Cards */}
<div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 ">
  {recipes.map((recipe,key) => (
    <div
      key={recipe.id}
      className="bg-white shadow-md flex flex-col rounded-xl overflow-hidden transition-all duration-200 h-[350px] w-[260px] mx-auto hover:drop-shadow-2xl cursor-pointer"
      onClick={()=>handleCard(recipe.id)}
    >
      {/* 🔹 Top Half - Image */}
      <div className="h-1/2 w-full overflow-hidden">
        {recipe.image_url ? (
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* 🔹 Middle - Info (wraps naturally) */}
      <div className="flex-grow flex flex-col justify-start px-3 py-2 overflow-hidden">
        <h2 className="font-semibold text-lg leading-tight truncate">
          {recipe.title}
        </h2>
        <p className="text-sm text-gray-600 leading-snug">
          By {recipe.author || "Unknown"}
        </p>
        <p className="text-xs text-gray-500 leading-tight">
          {recipe.cuisine} | {recipe.difficulty} | {recipe.cooking_time} min
        </p>

        {/* Optional description */}
        {recipe.description && (
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">
            {recipe.description}
          </p>
        )}
      </div>

      {/* 🔹 Bottom - Likes & Comments */}
      <div className="flex justify-between items-center text-sm text-gray-700 border-t px-3 py-2 mt-auto">
        <span>❤️ 0</span>
        <span>💬 0</span>
      </div>
    </div>
  ))}
</div>






                {/* <div className="cards grid grid-cols-4 gap-10 mt-10 h-full">
  
                {cards.map((value,key)=>(
                    <div className="bg-white p-2 shadow flex flex-col gap-3">
                        <div className="img h-[200px] w-auto shadow-xl">
                            <img src="l">
                            </img>
                        </div>
                            <div className="Recipeinfo">
                                {value}
                            </div>
                        <div className="performance flex flex-row justify-between">
                            <h1>Time</h1>
                            <div className="rightside flex flex-row justify-end">
                                    <div className="Likes">
                                        1
                                    </div>
                                    <div className="Comments">
                                        2
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                )
                
                )}


                
                </div> */}
                </div>
            
    
  )
}

export default Home
