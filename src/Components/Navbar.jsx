import {  useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = ()=>setMenuOpen(!menuOpen);

  const linkHoverStyle =
    "hover:bg-blue-300 hover:text-white hover:font-extrabold mx-3 -my-2 p-2 rounded-md";
  
    const mobileLinkHoverStyle = "transition-colors duration-500 ease-in-out hover:bg-blue-50 transform hover:scale-90 p-2 "
  const items = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
  ];
  return (
    <div className="bg-blue-200 p-5 sticky top-0 z-50 
   "
    >
      <div className="flex justify-between p-2 items-center">

        {/* hamburger button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24}/> }
        </button>

        <ul className="hidden md:flex justify-end gap-[1rem]  text-black">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={linkHoverStyle}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div>
          <a href="#contact" className={linkHoverStyle}>Contact me!</a>
        </div>
      </div>


      {/* mobile view */}
      {menuOpen && (
                <ul className="md:hidden mt-4 flex flex-col gap-2 text-black ">
                    {items.map((items)=>(
                        <li key={items.name} className={mobileLinkHoverStyle}>
                            <a 
                                href={items.href} 
                                
                                onClick={()=>setMenuOpen(false)}>
                                {items.name}
                            </a>

                        </li>
                    ))

                    }
                </ul>
            )}
    </div>
  );
}

export default Navbar;
