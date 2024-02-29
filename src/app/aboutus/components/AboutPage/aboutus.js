"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLongArrowAltRight } from "react-icons/fa";

const aboutus = () => {
  return (
    <motion.div className='about_us h-screen w-screen  flex align-center justify-center px-16 py-4 gap-12 '>
      <div className='about_img'></div>
      <div id='content' className='content gap-8 pr-16'>
        <h1 className='font-semibold w-5/6' style={{ minHeight: "auto", overflowY: "hidden", lineHeight: "40px", fontSize: "35px" }}>How Did StudentStash Exchange Come To Be?</h1>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg text-red opacity-50'>Toh Dekho mai basically bohot saari cheezen kareedta hu organize karne ke liye like plastic baskets , Soap Organisers and Clothe Organisers. thora sa hoon mai OCD type critical but fir jab mera 4th Year khatam hone ko aya - mujhe in cheezon ko fekna ka mann nhi tha aur na hi ghar wapis le jaane ke jagah toh maine socha bech du. fir maine socha mere jaise kitte aur honge</h2>
          <h2 className='text-lg opacity-50'>And StudentStash Exchange Was born - A webiste that lets you sell and buy things to people alike who don't wanna unnessacarily spend more on such stuff</h2>
        </div>
        <motion.div id='shopourstore'
          initial={{
            backgroundColor: "black",
          }}
          whileHover={{
            backgroundColor: "rgb(105,149,177)",
          }}
          transition={{
            duration: 2,
            ease: "easeIn"
          }}

        >
          
            <div className='shop_button'>
              <Link href="/Shop" className='shop_link' >SHOP OUR STORE <FaLongArrowAltRight /></Link>
            </div>
          
        </motion.div>
      </div>
    </motion.div>
  )
}

export default aboutus;
