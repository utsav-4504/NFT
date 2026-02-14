import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import gsap from "gsap";

function Header() {

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchHover, setSearchHover] = useState(false);

  const items = [
    "Explore Items",
    "Create Item",
    "Connect Wallet",
    "Support",
    "Sign In Page",
    "Sign Up Page"
  ];

  // 🔥 Navbar intro animation
  useEffect(() => {

    if(!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { y:-80, opacity:0 },
      { y:0, opacity:1, duration:0.8, ease:"power3.out" }
    );

  }, []);

  // 🔥 Scroll background change
  useEffect(() => {

    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // 🔥 Dropdown animation
  useEffect(() => {

    if(open && dropdownRef.current){
      gsap.fromTo(
        dropdownRef.current,
        { opacity:0, y:-20 },
        { opacity:1, y:0, duration:0.3 }
      );
    }

  },[open]);

  // 🔥 Mobile menu animation
  useEffect(() => {

    if(mobileMenu && mobileRef.current){
      gsap.fromTo(
        mobileRef.current,
        { y:-40, opacity:0 },
        { y:0, opacity:1, duration:0.3 }
      );
    }

  },[mobileMenu]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scroll ? "bg-[#0f0b1f]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <img src="./logo.svg" alt="logo" />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/" className="text-white">Explore</Link>
          <Link to="/" className="text-white">Community</Link>

          <div className="relative">
            <button
              className="text-white flex items-center gap-2"
              onClick={()=>setOpen(!open)}
            >
              Pages <FaChevronDown/>
            </button>

            {open && (
              <div
                ref={dropdownRef}
                className="absolute top-8 w-60 bg-[#1d2144] border border-white/10 rounded-2xl py-3"
              >
                {items.map((item,i)=>(
                  <div key={i} className="px-4 py-2 text-gray-300 hover:text-white cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/" className="text-white">Support</Link>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-5">

          <div
            className="relative"
            onMouseEnter={()=>setSearchHover(true)}
            onMouseLeave={()=>setSearchHover(false)}
          >
            <FaSearch className="text-white cursor-pointer"/>

            <div className={`absolute right-0 mt-6 flex items-center bg-[#1d2144] rounded-md overflow-hidden transition-all duration-300
            ${searchHover ? "w-64 opacity-100 px-2 py-1" : "w-0 opacity-0"}
            `}>
              <input className="bg-transparent text-white px-2 outline-none w-full" placeholder="Search..." />
            </div>

          </div>

          <button className="flex items-center gap-2 px-5 py-3 border border-white text-white rounded-2xl hover:bg-blue-600 hover:border-blue-600">
            <FaWallet/> Wallet Connect
          </button>

        </div>

        {/* MOBILE BTN */}
        <button
          onClick={()=>setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white text-xl"
        >
          {mobileMenu ? <FaTimes/> : <FaBars/>}
        </button>

      </div>

      {mobileMenu && (
        <div ref={mobileRef} className="lg:hidden bg-[#0f0b1f] border-t border-white/10">
          <div className="flex flex-col gap-5 p-5">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/" className="text-white">Explore</Link>
            <Link to="/" className="text-white">Community</Link>
            <Link to="/" className="text-white">Support</Link>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;