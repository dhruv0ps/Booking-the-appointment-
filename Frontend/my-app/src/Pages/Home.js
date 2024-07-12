import React from 'react'
import Header from '../Components/Header'
import Hbody from '../Components/Hbody'
import Footer from '../Components/Footer'
import News from '../Components/News'
import ImageCarousel from '../Components/ImageCarousel'
const Home = () => {
  return (
    <div className='app' style={{backgroundColor:"whitesmoke"}}>
      <Header/>
      <Hbody/>
      <News/>
      <ImageCarousel/>
      <Footer/>
    </div>
  )
}

export default Home
