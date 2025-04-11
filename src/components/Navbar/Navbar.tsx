import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavLinks from "./NavLinks";
// Import flag images
import usaFlag from "../../assets/flags/usa.svg";
import franceFlag from "../../assets/flags/france.svg";
import spainFlag from "../../assets/flags/spain.svg";
import germanyFlag from "../../assets/flags/germany.svg";
import italyFlag from "../../assets/flags/italy.svg";

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [localizationOpen, setLocalizationOpen] = useState(false);
  const numOfCartItems = 0; // TODO: Integrate with cart state
  const profileRef = useRef<HTMLDivElement>(null);
  const localizationRef = useRef<HTMLDivElement>(null);
  /* Navigation links */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
      if (
        localizationRef.current &&
        !localizationRef.current.contains(event.target as Node)
      ) {
        setLocalizationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/AllProducts", name: "Products" },
    { id: 3, to: "/Brands", name: "Brands" },
  ];
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-text text-white py-1.5 text-center ">
        <div className="flex justify-center items-center space-x-2">
          <i className="fa-solid fa-gift" />
          <p className="cursor-pointer text-sm md:text-base">
            10% OFF YOUR FIRST ORDER | CODE: HEY10
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-200 shadow-lg w-full sticky top-0 z-50 font-semibold">
        <div className="nav-container">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center text-main font-bold text-lg"
            >
              <span>shopping</span>
            </Link>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-6">
              <NavLinks items={navItems} />
            </div>
          </div>
          {/* Search Bar - Responsive */}
          <div className="w-auto lg:max-w-sm order-last lg:order-1 grow  ">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="search-input"
                placeholder="Search..."
                required
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 order-2 md:order-3">
            {/* localization */}
            <div className="relative" ref={localizationRef}>
              <button
                className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-300 transition-colors duration-200"
                onClick={() => setLocalizationOpen(!localizationOpen)}
              >
                <img
                  src={usaFlag}
                  alt="USA"
                  className="w-5 h-5"
                />
                <span className="hidden sm:inline">English</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              {localizationOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src="/src/assets/flags/usa.svg"
                        alt="USA"
                        className="w-5 h-5 mr-3"
                      />
                      <span>English (US)</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src="/src/assets/flags/uk.svg"
                        alt="UK"
                        className="w-5 h-5 mr-3"
                      />
                      <span>English (UK)</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={franceFlag}
                        alt="France"
                        className="w-5 h-5 mr-3"
                      />
                      <span>Français</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={spainFlag}
                        alt="Spain"
                        className="w-5 h-5 mr-3"
                      />
                      <span>Español</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={germanyFlag}
                        alt="Germany"
                        className="w-5 h-5 mr-3"
                      />
                      <span>Deutsch</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={italyFlag}
                        alt="Italy"
                        className="w-5 h-5 mr-3"
                      />
                      <span>Italiano</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                className="icon-with-text"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <i className="fa-solid fa-user" />
                <span className="hidden sm:inline">Profile</span>
              </button>
              {profileOpen && (
                <ul className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                  <li>
                    <Link to="/" className="dropdown-item">
                      <i className="fa-solid fa-bag-shopping me-2" />
                      Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left dropdown-item"
                    >
                      <i className="fa-solid fa-right-from-bracket me-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
            {/* Wishlist */}
            <Link to="/" className="icon-with-text">
              <i className="fa-regular fa-heart" />
              <span className="hidden sm:inline">Favorites</span>
            </Link>
            {/* Cart */}
            <Link to="/" className="icon-with-text relative">
              <i className="fa-solid fa-cart-shopping" />
              {numOfCartItems > 0 && (
                <span className="cart-badge">{numOfCartItems}</span>
              )}
              <span className="hidden sm:inline">Cart</span>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavIsOpen(!navIsOpen)}
              className="md:hidden text-xl hover:text-main transition-colors duration-500 w-[20px]"
              aria-label="Toggle menu"
            >
              <i
                className={navIsOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {navIsOpen && (
          <div className="mobile-menu">
            <div className="container mx-auto py-3 px-4">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <NavLinks
                      items={[item]}
                      isMobile={true}
                      onClick={() => setNavIsOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
