import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
gsap.utils.toArray(".collection-card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    gsap.to(card,{ y:-10, scale:1.02, duration:0.3 });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card,{ y:0, scale:1, duration:0.3 });
  });

});
function Collection() {

    useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.from(".collection-card", {
      scrollTrigger: {
        trigger: ".collection-section",
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

  });

  return () => ctx.revert();

}, []);

    return (
        <section className='collection-section bg-[#0f0b1f] py-16'>
            <div className="container mx-auto">

                {/* HEADER */}
                <div className='flex justify-between items-center'>
                    <h2 className='text-white text-3xl font-semibold'>Live Auctions</h2>

                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl py-3 px-8'>
                        View All
                    </button>
                </div>

                <div className="border-b mb-10 mt-8 border-white/10"></div>

                <div className="-mx-4 flex flex-wrap">

                    {/* CARD 1 */}
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="collection-card mb-10 rounded-xl border border-white/10 bg-[#2b2c3b] p-5 md:p-7">

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-2/3 px-3">
                                    <img src="camera.svg" className="w-full rounded-xl mb-6" />
                                </div>

                                <div className="w-1/3 px-3">
                                    <img src="./image-02.svg" className="w-full rounded-xl mb-6" />
                                    <img src="./image-03.svg" className="w-full rounded-xl" />
                                </div>
                            </div>

                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-white">
                                    Creative 3d illustration
                                </h3>

                                <button className="bg-white px-2 py-1 rounded-md">
                                    ❤️ <span className="text-xs font-semibold text-black">1.6K</span>
                                </button>
                            </div>

                            <div className="flex items-center">
                                <img src="./creator-01.jpg" className="w-11 h-11 rounded-md mr-3" />
                                <h4 className="text-white font-semibold">
                                    @Lathium_Lui...
                                    <span className="block text-sm text-gray-400">Creator</span>
                                </h4>
                            </div>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="collection-card mb-10 rounded-xl border border-white/10 bg-[#2b2c3b] p-5 md:p-7">

                            <div className="-mx-3 flex flex-wrap">

                                <div className="w-1/3 px-3">
                                    <img src="./image-04.svg" className="w-full rounded-xl mb-6" />
                                </div>

                                <div className="w-2/3 px-3">
                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-1/2 px-3">
                                            <img src="./image-05 (1).svg" className="w-full rounded-xl mb-6" />
                                        </div>

                                        <div className="w-1/2 px-3">
                                            <img src="./image-06.svg" className="w-full rounded-xl mb-6" />
                                        </div>

                                        <div className="w-full px-3">
                                            <img src="./image-07 (1).svg" className="w-full rounded-xl mb-6" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-white">
                                    Modern illustration
                                </h3>

                                <button className="bg-white px-2 py-1 rounded-md">
                                    ❤️ <span className="text-xs font-semibold text-black">3.6K</span>
                                </button>
                            </div>

                            <div className="flex items-center">
                                <img src="./creator-04.png" className="w-11 h-11 rounded-md mr-3" />
                                <h4 className="text-white font-semibold">
                                    @Andrio_Hev...
                                    <span className="block text-sm text-gray-400">Creator</span>
                                </h4>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Collection