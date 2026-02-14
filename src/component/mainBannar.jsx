import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MainBanner() {

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

 useEffect(() => {

  if(!titleRef.current) return;

  const tl = gsap.timeline({
    defaults:{ ease:"power3.out" }
  });

  tl.fromTo(titleRef.current,
    { x:-80, opacity:0 },
    { x:0, opacity:1, duration:1 }
  )
  .fromTo(textRef.current,
    { x:-50, opacity:0 },
    { x:0, opacity:1, duration:0.8 },
    "-=0.5"
  )
  .fromTo(btnRef.current.children,
    { y:30, opacity:0 },
    { y:0, opacity:1, stagger:0.2, duration:0.6 },
    "-=0.3"
  )
  .fromTo(imgRef.current,
    { x:120, opacity:0 },
    { x:0, opacity:1, duration:1 },
    "-=1"
  );

  // floating animation
  gsap.to(imgRef.current,{
    y:20,
    repeat:-1,
    yoyo:true,
    duration:2,
    ease:"sine.inOut"
  });

},[]);

  return (
    <section className="relative z-10 overflow-hidden bg-[#0f0b1f] pt-30 pb-16 md:pb-24">

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-12 max-w-142.5 mx-auto lg:mx-0">

              <h1
                ref={titleRef}
                className="mb-4 font-bold leading-tight text-white
                text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
              >
                Tailwind Template for NFT Marketplace and Web3 Platforms
              </h1>

              <p
                ref={textRef}
                className="mb-8 text-[#a1a0ae] text-base sm:text-lg leading-relaxed"
              >
                Template for NFT, Token, and Web3 marketplace projects.
              </p>

              <div
                ref={btnRef}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <a className="inline-flex items-center justify-center rounded-md border-2 py-3 px-7 bg-blue-600 border-blue-600 hover:bg-blue-800 text-white font-semibold">
                  Explore now
                </a>

                <a className="inline-flex items-center justify-center rounded-md border-2 py-3 px-7 text-white border-white/20 hover:bg-blue-600">
                  Upload Your Art
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div ref={imgRef} className="text-center">
              <img
                src="./hero-image.svg"
                alt="hero"
                className="mx-auto max-w-[90%] sm:max-w-[80%] lg:max-w-full"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default MainBanner;