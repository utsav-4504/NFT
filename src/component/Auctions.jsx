import React from 'react'

function Auctions() {

  const auctions = [
    {
      title: "22-Bit Digital #551",
      img: "/image-01.svg",
      creator: "@Devid_Miller",
      eth: "5.49 ETH",
      likes: "4.6K",
      time: "05 : 15 : 07 : 45",
      createrimage: "/image-01.png"
    },
    {
      title: "25-Bit Digital #729",
      img: "/image-02.svg",
      creator: "@Devid_Meth",
      eth: "1.58 ETH",
      likes: "1.6K",
      time: "06 : 15 : 07 : 55",
      createrimage: "/image-02.png"
    },
    {
      title: "27-Bit Digital #395",
      img: "/image-03 (1).svg",
      creator: "@Jemmy_Frank",
      eth: "3.25 ETH",
      likes: "500",
      time: "02 : 15 : 08 : 44",
      createrimage: "/creator-03.png"
    },
    {
      title: "35-Bit Digital #439",
      img: "/save.svg",
      creator: "@Miliya_Chow",
      eth: "1.57 ETH",
      likes: "200",
      time: "07 : 15 : 03 : 12",
      createrimage: "/image-04.png"
    },
  ];

  return (
    <section className='bg-[#0f0b1f] py-16'>
      <div className='container mx-auto px-4'>

        <div className='flex justify-between items-center'>
          <h2 className='text-white text-3xl font-semibold'>Live Auctions</h2>

          <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl py-3 px-8'>
            View All
          </button>
        </div>

        <div className="border-b mb-10 mt-8 border-white/10"></div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

          {auctions.map((item, index) => (
            <div key={index}
              className='bg-[#1d2144] border border-white/10 rounded-3xl p-4
transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:border-blue-500'>

              <div className='relative rounded-2xl overflow-hidden mb-5 group'>
                <img src={item.img} className='w-full transition-transform duration-500 group-hover:scale-110' />
                <span className='absolute top-3 right-3 bg-white text-black text-sm px-3 py-1 rounded-lg'>
                  ❤️ {item.likes}
                </span>
              </div>

              <h3 className='text-white text-lg font-semibold mb-4'>{item.title}</h3>

              <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2'>
                  <img src={item.createrimage} className='w-8 h-8 rounded-full' />
                  <div>
                    <p className='text-white text-sm'>{item.creator}</p>
                    <span className='text-[#a1a0ae] text-xs'>creator</span>
                  </div>
                </div>

                <div className='text-right'>
                  <p className='text-white text-sm'>{item.eth}</p>
                  <span className='text-[#a1a0ae] text-xs'>Current Bit</span>
                </div>
              </div>

              <div className='bg-[#2a2f5a] text-center text-white rounded-xl py-3 font-medium tracking-widest'>
                {item.time}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Auctions