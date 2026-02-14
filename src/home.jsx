import React from 'react'
import Header from './component/header'
import MainBanner from './component/mainBannar'
import TopArtists from './component/TopArtists'
import Auctions from './component/Auctions'
import Picks from './component/Picks'
import  Features  from './component/Features'
import Collection from './component/Collection'
import Footer from './component/Footer'
function home() {
  return (
    <div>
      <Header />
      <MainBanner />
      <TopArtists />
      <Auctions />
      <Picks />
      <Features />
      <Collection />
      <Footer />
    </div>
  )
}

export default home
