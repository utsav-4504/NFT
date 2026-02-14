import React, { useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

  const footerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".footer-col", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        }
      });

    }, footerRef);

    return () => ctx.revert(); // 🔥 SUPER IMPORTANT CLEANUP

  }, []);

  return (
    <footer ref={footerRef} className="bg-[#2b2c3b] pt-24">
      <div className="container mx-auto px-4">

        <div className="-mx-4 flex flex-wrap">

          {/* LEFT SIDE */}
          <div className="footer-col w-full px-4 sm:w-6/12 lg:w-3/12 xl:w-4/12">
            <div className="mb-16 max-w-75">
              <img src="/logo.svg" className="mb-7 h-10" />

              <p className="mb-6 text-base text-gray-400">
                Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore.
              </p>

              <div className="flex items-center gap-5 text-white">
                <FaFacebook size={25} className="cursor-pointer hover:text-indigo-500"/>
                <FaTwitter size={25} className="cursor-pointer hover:text-indigo-500"/>
                <FaLinkedin size={25} className="cursor-pointer hover:text-indigo-500"/>
                <FaYoutube size={25} className="cursor-pointer hover:text-indigo-500"/>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col w-full px-4 sm:w-6/12 lg:w-3/12 xl:w-3/12">
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-white">Company</h2>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">About company</a></li>
                <li><a href="#" className="hover:text-white">Company services</a></li>
                <li><a href="#" className="hover:text-white">Job opportunities</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* CUSTOMER */}
          <div className="footer-col w-full px-4 sm:w-6/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-white">Customer</h2>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">Client support</a></li>
                <li><a href="#" className="hover:text-white">Latest news</a></li>
                <li><a href="#" className="hover:text-white">Company Details</a></li>
                <li><a href="#" className="hover:text-white">Who we are</a></li>
              </ul>
            </div>
          </div>

          {/* SUBSCRIBE */}
          <div className="footer-col w-full px-4 sm:w-6/12 lg:w-3/12 xl:w-3/12">
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-white">
                Subscribe Now
              </h2>

              <p className="mb-5 text-gray-400">
                Enter your email address for receiving valuable newsletters.
              </p>

              <form className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-lg border border-white/10 bg-transparent pl-5 pr-12 text-sm text-white outline-none focus:border-indigo-500"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-indigo-600 text-white"
                >
                  ➤
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10">
          <div className="py-7 text-center">
            <p className="text-gray-400">
              © Copyright 2025 - NFT, All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}