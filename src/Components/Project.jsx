import React from "react";
import contact from "../Images/Contact.png";
import netflix from '../Images/Netflix.png'

const Project = () => {
  return (
    <div className="flex w-full flex-col items-center p-5 bg-blue-200
    "> 
      <header className="text-2xl p-5 font-bold
       text-blue-600
       md:text-4xl md:p-8">Projects</header>
      <div className="md:flex md:flex-row md:gap-4">

      {/* Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 bg-blue-300">
      
        <div className="flex justify-center items-center p-4">
          <img src={contact} alt="Contact App Screenshot" className="w-2/3 h-2/3 object-contain  transition-transform duration-300 
          md:w-full md:h-4/5 hover:scale-110" /> 
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ReactJS Contact Book</div>
          {/* <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p> */}
        </div>
        <div className="px-6 pt-4 pb-2 ">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           Live Demo
          </span> */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="https://github.com/MouMajhi23/ReactContactBook">Details </a>
        
          </span>
        </div>
      </div>

       {/* Card 2 */}
       
       <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 bg-blue-300">
      
      <div className="flex justify-center items-center p-4">
        <img src={netflix} alt="Contact App Screenshot" className="w-2/3 h-2/3 object-contain transition-transform duration-300
        md:w-full md:h-4/5 hover:scale-110" /> 
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Netflix Cloning</div>
        {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p> */}
      </div>
      <div className="px-6 pt-4 pb-2 ">
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         Live Demo
        </span> */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href="https://github.com/MouMajhi23/Netflix-Cloning">Details </a>
      
        </span>
      </div>
    </div>


      </div>
    </div>
  );
};

export default Project;