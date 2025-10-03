import React from 'react'
import search from '../assets/search.svg';
const Hero = () => {

    const cards = ["Card1","Card2","Card3","Card4","Card5"];
    const buttons = ["Home","Posts","HighLights","Notfications"]
  return (
    <div className="mt-12 flex flex-row w-[100%] h-screen">
            <div className="flex flex-col">
                {buttons.map((value,key)=>(
                    <button className="bg-yellow-200 p-2"><h1>{value}</h1></button>
                )
                
                )}

            </div>


            <div className="Hero  bg-white p-5 w-[100%] h-[100%]">
                <div className="flex flex-col">
                <div className="flex justify-end">
                    
                    <div className="bg-white items-center justify-center flex flex-row shadow">
                    <input type="text" placeholder="Search" className="p-2 shadow-inner m-1"/>
                    <img src={search} className="h-8"></img>
                    
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-10 mt-10">
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
                </div>
                </div>
            </div>
    </div>
  )
}

export default Hero
