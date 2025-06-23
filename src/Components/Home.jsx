function Home() {
    return (
      <section
        id="home"
        className="flex flex-col 
        justify-center 
        items-center 
        bg-gradient-to-r from-blue-200 to-blue-400  
        text-center p-10
        md:p-40
        "
      >
        <h1 className="text-4xl font-extrabold mb-6 p-4
        md:p-2"
        >
          Crafting Beautiful & Functional Web Experiences
        </h1>
        <p className="text-xl text-gray-700 max-w-screen-lg mx-6">
          Welcome to my portfolio! Dive in to see my projects and skills.
        </p>

        {/* Explore section */}
        <div className="mt-8 flex justify-center gap-6 flex-col
        md:flex-row ">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Explore My Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Learn More About Me
          </a>
        </div>
      </section>
    );
  }
  
  export default Home;
  