import React from 'react'
import search from '../assets/search.svg';
import ImageBlock from './ImageBlock';
import Home from './Home';
import Posts from './Posts';
import Highlights from './Highlights';
import Notifications from './Notifications';
import Create from './Create';
import {useState} from "react"
import { useNavigate } from 'react-router-dom';


const Hero = ({user}) => {
    const [Modal,showModal] = useState(false);
    // const cards = ["Card1","Card2","Card3","Card4"];
    const buttons = ["Home","Posts","HighLights","Notfications","Create"];
    const SideBarRoutes = [Home,Posts,Highlights,Notifications,Create];
    const [route,setRoute] = useState(<Home/>);
    const navigate = useNavigate();

    const handleRoute = (Component)=>{
        if(user!=null)
        {
        if(Component==Create)
        {
             showModal(true);
           
        }
        else{
            showModal(false);
            setRoute(<Component/>)
            
        }
    }

    else{
        if(Component!=Home)
        {
        navigate("/Login");
        }
    }
    }

  return (
    <div className="main mt-12 flex flex-row w-[100%] bg-blue-900">
            <div className="sidebar sticky top-12 flex flex-col gap-4 bg-blue-900 text-white p-2 h-[100%] ">
                
                
                
                {buttons.map((value,key)=>{
                    const Component = SideBarRoutes[key];
                    return(
                    <button className="shadow" onClick={()=>handleRoute(Component)} ><h1>{value}</h1></button>
                )}
            
                )}

            </div>

            <div className="HomeHero mt-3 bg-white shadow-xl rounded-xl p-5 w-[100%] h-[100%]">
{/* <Home/> */}

                
                

{!Modal &&
route
}
</div>
      {Modal && <Create showModal={showModal} />}
{/*
            <div className="HomeHero mt-3 bg-white shadow-xl rounded-xl p-5 w-[100%] h-[100%]">
                <div className="flex flex-col h-full gap-4">
                        <div className="Searchbar flex justify-end">
                            
                            <div className="bg-white items-center justify-center flex flex-row shadow">
                            <input type="text" placeholder="Search" className="p-2 shadow-inner m-1"/>
                            <img src={search} className="h-8"></img>
                            
                            </div>
                        </div>
                        <div className="imageBlocks flex flex-row h-[100px] border-2 justify-center">
                        <ImageBlock/>
        
                             <h1>Hello</h1> 1080X1080 img with 240X240 per block 4x4 blocks 
                        </div>
                <div className="cards grid grid-cols-4 gap-10 mt-10 h-full">

                    
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
            */}
    </div>
  )
}

export default Hero
