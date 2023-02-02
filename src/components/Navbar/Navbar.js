  
import React from 'react'

export default function Navbar() {
  return (
     
  <>
 

 <nav className="sticky top-0 z-50 bg-blur-3xl px-20 sm=:px-4 py-5 blur-nav ">   
      <div className="container flex flex-wrap items-center justify-between  ">
      <a href="/" className="flex items-center">
          <img src="logo.png" className="h-6 mr-3 sm:h-9 logo-size" alt="Logo" />
    
      </a>
      <div className="flex md:order-2">
          <img src="search-icon.png" className="search-bar-logo"/>
          <img src="shoping-icon.png" className=" shopping-bar-logo"/>
          <button type="button" className=" nav-sign-in-butten-bg-color text-white    ">SIGN IN</button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm   rounded-lg md:hidden   focus:outline-none  " aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
          
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white" aria-current="page">Courses</a>
          </li>
    
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Immigration</a>
          </li>
    
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Study Visa</a>
          </li>
    
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Ebooks</a>
          </li>
    
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Resources</a>
          </li>
    
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Become a Tutor</a>
          </li>
        
        </ul>
      </div>
      </div> 
    
    </nav> 
    </>

  )
}

 
