import React from 'react'
import Whyus from './components/WHYUS/page';
import AboutUs from './components/AboutPage/aboutus';
import Comments from './components/Commands/page';
import Footer from './components/Footer/page';
import Header from '../Shop/Components/Header';
import BannerShop from '../Shop/Components/BannerMain';
const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Header />
      <BannerShop />
      <hr />
      <Whyus />
      <hr />
      <AboutUs />
      <Comments />
      <hr />
      <Footer />
    </div>
  )
}

export default page