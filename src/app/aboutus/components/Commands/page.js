import React from 'react'
import Card from './card'
import { SliderData } from './SliderData'
import { FaQuoteRight } from "react-icons/fa";

const page = () => {
    
  return (
    <div className='Comments'>
      <FaQuoteRight  className='rightquotes'/>
      <Card slides = {SliderData} className="cards" />
    </div>
  )
}

export default page