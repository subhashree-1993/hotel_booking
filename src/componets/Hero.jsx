import React from "react";
import image from '../assets/seabeach.jpg'
import { IoLocationOutline,  IoPeopleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";


const Hero = () => {
    return (
      <div>
        
      <header class="text-blue-400 body-font ">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        <span class="ml-3 text-xl">Tour Guids</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
        <a class="mr-5 hover:text-gray-900">Home</a>
        <a class="mr-5 hover:text-gray-900">About us</a>
        <a class="mr-5 hover:text-gray-900">Popular Destinations</a>
        <a class="mr-5 hover:text-gray-900">Our Package </a>
        <a class="mr-5 hover:text-gray-900">Help</a>
      </nav>
      <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 bg-yellow-300">Sign In
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  
  
  <div class='relative'>
  
      <img src={image} alt="" class='object-cover'/>
      <h2 class='absolute top-[50%] left-[30%] text-4xl  font- bold'>We Find The Best Tour For You</h2>
      <br></br>
      <h2 class='absolute top-[60%] left-[20%] text-xl  '>Amet minims moliit non deserunt ullamco est sit aliqua dolor do Amet
      sint velit afficia <br />consequent duel enium velit molit.Exercitation version consequant sunt nostrud armet</h2>
  </div>
  
   <div className="w-[750px] h-[50px] bg-white mx-auto absolute top-[130%] left-[22%] flex justify-center items-center gap-4 ">
        <div>
          <div className="flex">
            < IoLocationOutline className=" pt-1 text-blue-600" size={25}/>
            <h1 className="text-blue-600">Location</h1>
          </div>
          <input type="text" placeholder="Search for a destination" className="px-2" />
        </div>
  
        <div>
          <div className="flex">
            < IoPeopleOutline className=" pt-1 text-blue-600" size={25}/>
            <h1 className="text-blue-600">Guests</h1>
          </div>
          <input type="text" placeholder="How many Guests" className="px-2" />
        </div>
  
  
        <div>
          <div className="flex">
            < CiCalendar className=" pt-1 text-blue-600" size={25}/>
            <h1 className="text-blue-600">Date</h1>
          </div>
            <input type="date" name="" id="" className="px-2"/>
        </div>
  
        <div>
          <button className="w-[100px] bg-yellow-400 h-[30px] rounded-full">Search</button>
        </div>
        
    </div>
  
      </div>
    )
  }

export default Hero