import React from "react";
import myimg from "../Images/Profile.jpeg";
import { TypeAnimation } from 'react-type-animation';


const About = () => {
  return (
    // parent flex-box (min-h-screen for full height section, p-5 for overall padding)
    <div id="about" className="flex flex-col items-center p-5  bg-blue-200"> 
      {/* Header */}
      <header className="text-4xl font-bold mb-8 text-blue-600">About Me</header>

      {/* Main Content Area - changes direction and width on medium screens and up */}
      <div className="flex flex-col-reverse items-center gap-8 p-4 w-full
      md:flex-row md:w-4/5 md:max-w-6xl md:justify-between md:items-start"> {/* Adjusted gap, width, justify, and added max-w */}
        
        {/* Article Section (Text content) */}
        <article className="mt-5 mb-2 text-center 
        md:w-3/5 md:text-left"> {/* Adjusted md:w and added md:text-left */}
          <h2 className="text-3xl font-semibold mb-2 text-gray-800">Hello! I am Mou Majhi</h2>
          <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Frontend Developer',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="pt-2 pb-2 text-blue-600 font-bold text-2xl md:text-3xl" // Increased text size slightly
              />

          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          a passionate Web Developer with a strong focus on front-end technologies. I specialize in building interactive, user-friendly interfaces using React.js, JavaScript, HTML5, and CSS3.
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">When I’m not coding, I enjoy Crafting ✂️, Travelling 🧳 & Framing Memories 📸</p>
        </article>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full
        md:w-2/5"> {/* Adjusted md:w for image section */}
          {/* Inner div for image styling, using aspect-ratio for consistent sizing */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0"> {/* Fixed size for image container for consistency */}
            <img
              src={myimg}
              alt="ProfileImage"
              className="rounded-bl-2xl rounded-tr-2xl object-cover w-full h-full border-4 border-blue-400 shadow-2xl" // Changed to rounded-full, object-cover, added border & shadow
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;