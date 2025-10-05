import React from 'react'
import search from '../assets/search.svg';
import ImageBlock from './ImageBlock';
import data from '../data/data.json'

const Home = () => {
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




      {/* Recipe Cards */}
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
