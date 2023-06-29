import { useState } from "react";

const Navbar = () => {
  const links = ["Home", "Product", "Faq", "Contact"];
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex p-10 justify-between items-center">
        <div className="w-[150px] md:w-[200px]">
          <img src="/bellaOlonjeLogo.png" alt="logo" />
        </div>

        <div
          className="w-[20px] sm:hidden"
          onClick={() => toggleMenu(isMenuOpen)}
        >
          <img src="/bars.svg" alt="" />
        </div>

        <div className="hidden sm:flex justify-between w-[580px]">
          {links.map((links) => {
            return (
              <a
                href="#"
                className={`hover:text-orange ${
                  links === activeLink && "text-orange"
                }`}
                onClick={() => setActiveLink(links)}
              >
                {links}
              </a>
            );
          })}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`flex flex-col items-center sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => {
          return (
            <a className="my-2 hover:text-orange " href="#">
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
