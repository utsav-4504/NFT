import React, { useEffect, useRef } from "react";
import { FaHeart, FaSyncAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Picks() {

  const sectionRef = useRef(null);

  const data = [
    { id: 1, img: "/image-01.svg", creator: "/creator-01.png", name: "@Devid_Mill...", eth: "5.49 ETH", likes: "4.6K" },
    { id: 2, img: "/image-02.svg", creator: "/creator-02.png", name: "@Wilium_de...", eth: "2.85 ETH", likes: "1.6K" },
    { id: 3, img: "/image-03 (1).svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" },
    { id: 4, img: "/image-04 (1).svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" },
    { id: 5, img: "/image-05.svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" },
    { id: 6, img: "/image-06 (1).svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" },
    { id: 7, img: "/image-07.svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" },
    { id: 8, img: "/image-08.svg", creator: "/creator-03.png", name: "@Nicolo_Tes...", eth: "7.82 ETH", likes: "4.6K" }
  ];

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".pick-card", {
        opacity: 0,
        y: 80,
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
      <div className="container mx-auto">

        <div className="mb-12 border-b border-white/10">
          <div className="justify-between sm:flex">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Today's Picks
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {data.map((item) => (
            <div
              key={item.id}
              className="pick-card rounded-2xl border border-white/10 bg-[#2a2b39] p-5 shadow-lg"
            >
              <div className="relative mb-5 rounded-xl flex justify-center overflow-hidden group">
                <img src={item.img} className="transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-semibold text-black">
                  <FaHeart className="text-pink-500"/>
                  {item.likes}
                </div>
              </div>

              <h3 className="mb-4 text-lg font-semibold text-white">
                3d abstract illustration
              </h3>

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={item.creator} className="h-9 w-9 rounded-md"/>
                  <p className="text-sm text-white">{item.name}</p>
                </div>

                <p className="text-sm font-semibold text-white">
                  {item.eth}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button className="rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white">
                  Place Bid
                </button>

                <button className="flex items-center gap-2 text-sm text-gray-300">
                  <FaSyncAlt/> View History
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Picks;