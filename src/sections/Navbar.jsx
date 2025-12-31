import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useLenis } from 'lenis/react';

const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

function Navigation({ isScrolled }) {
  const [active, setActive] = useState('Home');
  const lenis = useLenis();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActive(item.name);
    if (lenis && item.href.startsWith("#")) {
      lenis.scrollTo(item.href);
    }
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li className={`nav-li relative ${isScrolled ? "text-neutral-400" : "text-black"}`} key={item.id}>
          <a
            href={item.href}
            className="nav-link relative px-2 py-1"
            onClick={(e) => handleNavClick(e, item)}
          >
            {isScrolled && active === item.name && (
              <motion.div
                layoutId="active-nav"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-[width,height,top,background-color] duration-500 ease-in-out ${isScrolled
        ? `inset-x-0 top-4 mx-auto w-[90%] sm:w-[60%] lg:w-[40%] ${isOpen ? "rounded-2xl" : "rounded-full"
        } bg-black/80 backdrop-blur-md shadow-2xl border border-white/10 py-2`
        : "inset-x-0 top-0 w-full bg-transparent"
        }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className={`text-xl font-bold transition-colors hover:text-white ${isScrolled ? "text-neutral-400" : "text-black"}`}
          >
            July
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex cursor-pointer hover:text-white focus:outline-none sm:hidden ${isScrolled ? "text-neutral-400" : "text-black"}`}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className={`w-6 h-6 ${isScrolled ? "" : "brightness-0"}`}
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation isScrolled={isScrolled} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className={`block overflow-hidden text-center sm:hidden ${isScrolled ? "rounded-b-2xl" : "backdrop-blur-md bg-black/30 inset-x-0 top-0 w-full absolute pt-20 pb-10 -z-10"}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation isScrolled={isScrolled} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
