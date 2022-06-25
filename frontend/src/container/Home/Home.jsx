import React from 'react'
import './Home.css'
import ImageStyle from '../../components/ImageStyle/ImageStyle'
import Services from '../../components/Services/Services'
import Slider from '../../components/Slider/Slider'
import TabmenuProducts from '../../components/TabmenuProducts/TabmenuProducts'

function Home() {
  return (
    <>
      <Slider />
      <Services />
      <TabmenuProducts />
      <div className="images-box container">
        <ImageStyle src="./src/assets/adeniom.jpg" title1="بهترین کیفیت" title2="بهترین ضمانت" />
        <ImageStyle src="./src/assets/adeniom.jpg" title1="بهترین کیفیت" title2="بهترین ضمانت" />
      </div>
      <div className="images-box container" dir='ltr'>
        <ImageStyle src="./src/assets/adeniom.jpg" title1="بهترین کیفیت" title2="بهترین ضمانت" />
        <ImageStyle src="./src/assets/adeniom.jpg" title1="بهترین کیفیت" title2="بهترین ضمانت" />
      </div>
    </>
  )
}

export default Home