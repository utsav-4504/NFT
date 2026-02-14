import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TopArtists() {

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const artists = [
    { name: "@Hiliya_Farah", eth: "9.89 ETH", img: "./creator-01.png" },
    { name: "@Wilium_Dev", eth: "2.09 ETH", img: "/creator-02.png" },
    { name: "@Devid_Miller", eth: "14.55 ETH", img: "/creator-03.png" },
    { name: "@Devid_Miller", eth: "14.55 ETH", img: "/creator-04.png" },
    { name: "@Hiliya_Farah", eth: "9.89 ETH", img: "/creator-05.png" },
    { name: "@Wilium_Dev", eth: "2.09 ETH", img: "/creator-06.png" },
    { name: "@Devid_Miller", eth: "14.55 ETH", img: "/creator-07.png" },
  ];

  // 🔥 SUPER SMOOTH SLIDE LEFT
  const scrollLeft = () => {
    gsap.to(sliderRef.current, {
      scrollLeft: sliderRef.current.scrollLeft - 340,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  // 🔥 SUPER SMOOTH SLIDE RIGHT
  const scrollRight = () => {
    gsap.to(sliderRef.current, {
      scrollLeft: sliderRef.current.scrollLeft + 340,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".artist-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f0b1f] py-16">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-semibold">
            Top Artists
          </h2>

          <div className="flex gap-3">
            <button onClick={scrollLeft} className="p-3 rounded-lg border border-[#2c3066] text-white">
              <FaArrowLeft />
            </button>
            <button onClick={scrollRight} className="p-3 rounded-lg border border-[#2c3066] text-white">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="border-b mb-5 border-white/10"></div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              className="artist-card min-w-[320px] p-px rounded-2xl hover:bg-linear-to-r from-[#ebc77a] via-[#ca3f8d] to-[#5142fc]"
            >
              <div className="bg-[#1d2144] rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.05]">
                <img src={artist.img} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h4 className="text-white text-lg">{artist.name}</h4>
                  <p className="text-green-400 font-medium">{artist.eth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopArtists;