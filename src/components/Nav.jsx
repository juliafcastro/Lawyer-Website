import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";
import { Menu, X } from "lucide-react"; // ícones de menu

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-1">
        {/* LOGO */}
        <Logo />

        {/* LINKS (desktop) */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium font-[merriweather]">
          {["home", "cards", "about", "contact"].map((section) => (
            <li key={section}>
              <Link
                smooth={true}
                duration={700}
                to={section}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-[#d48550] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cobre-claro after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    : "text-white hover:text-cobre-claro relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cobre-claro after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                }`}
              >
                {section === "home"
                  ? "Home"
                  : section === "cards"
                  ? "Serviços"
                  : section === "about"
                  ? "Sobre"
                  : "Contato"}
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTÃO (desktop) */}
        <div className="hidden md:block">
          <Link smooth={true} duration={700} to="contact">
            <button
              type="button"
              className={`
                relative group px-6 py-2 text-[16px] font-semibold border 
                ${
                  scrolled
                    ? "text-[#d48550] border-[#d48550] hover:text-white"
                    : "text-white border-white hover:text-cobre-claro"
                }
                bg-transparent overflow-hidden
                transition-all duration-600
                ease-[cubic-bezier(0.23,1,0.32,1)]
                hover:scale-110 active:scale-100 cursor-pointer
              `}
            >
              <span className="relative z-10 font-[merriweather]">
                Entre em contato
              </span>

              <span
                className={`absolute inset-0 m-auto w-20 h-[50px] rounded-full 
                  ${scrolled ? "bg-[#d48550]" : "bg-white"} 
                  scale-0 transition-all duration-1200
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:scale-[3] z-0`}
              ></span>
            </button>
          </Link>
        </div>

        {/* BOTÃO BURGUER (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                size={30}
                className={`transition-all duration-300${
                  scrolled ? "text-[#d48550]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                size={30}
                className={`transition-colors ${
                  scrolled ? "text-[#d48550]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-2/3 bg-azul-escuro/70 backdrop-blur-3xl text-white z-40 transform transition-transform duration-500 py-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Logo />
        <div className="flex flex-col items-start p-8 space-y-6 text-lg font-[merriweather]">
          {["home", "cards", "about", "contact"].map((section) => (
            <Link
              key={section}
              smooth={true}
              duration={700}
              to={section}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-[#d48550] transition-colors"
            >
              {section === "home"
                ? "Home"
                : section === "cards"
                ? "Serviços"
                : section === "about"
                ? "Sobre"
                : "Contato"}
            </Link>
          ))}

          <hr className="w-full border-white/20" />

          <Link smooth={true} duration={700} to="contact">
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 text-sm font-semibold text-cobre-claro border-2 border-cobre-claro bg-transparent mt-4 overflow-hidden
             transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
             hover:scale-102 hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
             active:scale-100 cursor-pointer font-[merriweather]"
            >
              Entre em contato
            </button>
          </Link>
        </div>
      </div>

      {/* OVERLAY (fecha o menu ao clicar fora) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
