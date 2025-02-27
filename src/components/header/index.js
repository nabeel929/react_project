
import React, { useEffect } from "react"
import { Link } from "react-router-dom"


function Header() {



    function Logout(){

     
    
            localStorage.clear();
    
        alert("You have been logout successfully")
    
    }

    return (
        <>
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ecom</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        
                        {
                            localStorage.getItem("user-info")?
<>
                            <Link to="/" className=" text-lg mr-5 hover:text-green-800">Home</Link>
                        <Link to="/products" className="mr-5  hover:text-purple-900">products</Link>
                        <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
                        <Link to="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>

  
                        </>
                        :

                        <>
                        <Link to="/login" className="mr-5 font-medium text-bold hover:text-purple-900">Login  </Link>
                        <Link to="/register" className="mr-5 font-medium text-bold  hover:text-gray-900">Register</Link>
                        <Link to="/thapa" className="mr-5 font-medium text-bold  hover:text-gray-900">ThapaForm</Link>
                        </>
                        }
                        
                        
                    </nav>

                    {
                        localStorage.getItem("user-info")?
                        <>
                        
                    <Link to="/buyitems">
                    <button className="inline-flex items-center  text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">Go to Cart
                        <svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button></Link>

                    
                           <Link to="register">
                    <button onClick={Logout} className="inline-flex items-center ml-2  text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">Logout
                     
                    </button></Link>
                        </>
:null
                    }

                       
                 
                </div>
            </header>
        </>
    )
}
export default Header;