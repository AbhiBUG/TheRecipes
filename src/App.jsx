import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
function App() {

const [user,setUser] = useState(null);
  return (
    <>
  <Router>
      <NavBar user={user}/>

      <Routes>
        {/* Home Dashboard (Hero) */}
        <Route path="/" element={<Hero user={user} />} />

        {/* Auth Pages */}
        <Route path="/Login" element={<Login setUser={setUser}/>} />
        <Route path="/Register" element={<Register />} />
      </Routes>
        <button className="fixed rounded-xl size-10 bottom-10 right-12 cursor-pointer">
                 <svg
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background */}
      <circle cx="25" cy="25" r="25" fill="blue" />

      {/* Plus sign */}
      <line
        x1="25"
        y1="12"
        x2="25"
        y2="38"
        stroke="white"
        strokeWidth="2px"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="25"
        x2="38"
        y2="25"
        stroke="white"
        strokeWidth="2px"
        strokeLinecap="round"
      />
    </svg>
        </button>


    
          
    </Router>

         <footer className=" bottom-0 left-0 w-full bg-blue-900 text-white text-center py-2 text-sm shadow-inner">
        © {new Date().getFullYear()} TheRecipes. All rights reserved.
      </footer>
    </>
  )
}

export default App
