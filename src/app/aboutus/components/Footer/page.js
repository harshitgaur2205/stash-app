"use client"
import React from 'react'
import Link from "next/link"
import {motion} from "framer-motion"

const page = () => {
  return (
    <footer >
      <div className="px-12 pt-6 pb-10 space-y-8" >
        <h1 className="font-bold " style={{fontSize:"50px" }}>Follow Our Instagram</h1>
        <p className="text-gray-500">
          Our official Instagram account as <a href="#">@Valsco</a> 
          <a href="#">Valsco Technology Private Limited</a>
        </p>
      </div>

      <div className="footer pt-24 pb-8 grid grid-cols-4 px-12 gap-x-40">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">StudentStash Exchange</h2>
          <ul className="space-y-3 text-gray-400">
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href={`/`}>About us</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Conditions</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Our Journals</Link></motion.li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Customer Service</h2>
          <ul className="space-y-3 text-gray-400">
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">FAQ</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Contact</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Privacy Policy</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Returns & Refunds</Link></motion.li>
            <motion.li
              whileHover={{
                color:"rgb(105,149,177)"
              }}
            ><Link href="/">Cookie Guidelines</Link></motion.li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              Do you have any questions or suggestions?
              <span>
                <a
                  href="mailto://bowal.ayan10@gmail.com"
                  className="font-bold underline"
                >
                  bhowal.ayan10@gmail.com
                </a>
              </span>
            </li>
            <li>
              Do you need assistance? Give me a call.
              <a href="tel://+91638689089" className="font-bold">
                +91 638689089
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Batch of 2024</h2>
          <p className="text-gray-400">
            This is a non-profit website aimed only to provide Junior College
            students with amenitities at cheap price and sustainable way of
            resuing plastic and other plastic or non-plastic non-retailable
            products usually disposed or my graduating college students
          </p>
          <p className="flex gap-4">{/* Put Icons here*/}</p>
        </div>
      </div>
      <hr />
      <div className="py-6 px-8 text-gray-400 flex justify-between">
        <p>Made by Ayan Bhowal Idealised by Sanidhya Agarwal</p>
        <div>Payment options: Cash. Gpay. PhonePe. Paytm.</div>
      </div>
      
      
    </footer>
  )
}

export default page