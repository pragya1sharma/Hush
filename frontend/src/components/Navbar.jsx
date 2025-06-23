import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      const hero = document.getElementById("hero-section");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      setIsSticky(rect.bottom <= 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <nav
      className={`w-full bg-[#FBF3E8] font-poppins ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-0.5 md:px-1 lg:px-1.5">
        <div className="flex items-center h-16 justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/landing");
              }}
              href="#"
              className="flex items-center h-full cursor-pointer"
            >
              <h1 className="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold text-[#3e807f] hover:text-[#2d5f5d] transition-colors duration-200">
                Hush
              </h1>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-8 h-full">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  const mainSection = document.getElementById("main-section");
                  if (mainSection) {
                    mainSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md flex items-center h-full"
              >
                Features
              </a>
              <a
                href="#faqs"
                onClick={(e) => {
                  e.preventDefault();
                  const faq = document.getElementById("faqs");
                  if (faq) {
                    faq.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md flex items-center h-full"
              >
                FAQs
              </a>
              <a
                href="#footer-section"
                onClick={(e) => {
                  e.preventDefault();
                  const footer = document.getElementById("footer-section");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md flex items-center h-full"
              >
                Contact us
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#3e807f] hover:text-[#2d5f5d] hover:bg-[#f5ede0] p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X icon (close)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon (hamburger)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#e8d5c4]" />
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#e8d5c4]">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#FBF3E8]">
            <a
              href="#features"
              className="flex justify-start text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#faqs"
              onClick={(e) => {
                e.preventDefault();
                const faq = document.getElementById("faqs");
                if (faq) {
                  faq.scrollIntoView({ behavior: "smooth" });
                }
                setIsMenuOpen(false);
              }}
              className="flex justify-start text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md"
            >
              FAQs
            </a>
            <a
              href="#footer-section"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("footer-section");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
                setIsMenuOpen(false);
              }}
              className="flex justify-start text-[#3e807f] hover:text-[#2d5f5d] px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-[#f5ede0] rounded-md"
            >
              Contact us
            </a>
            <div className="pt-4 pb-3 border-t border-[#e8d5c4]"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
