"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="footer pt-24 pb-8 grid grid-cols-4 px-12 gap-x-40">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">StudentStash Exchange</h2>
          <ul className="space-y-3 text-gray-400">
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href={`/`}>About us</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Conditions</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Our Journals</Link>
            </motion.li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Customer Service</h2>
          <ul className="space-y-3 text-gray-400">
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">FAQ</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Contact</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Privacy Policy</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Returns & Refunds</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: "rgb(105,149,177)",
              }}
            >
              <Link href="/">Cookie Guidelines</Link>
            </motion.li>
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
          <div className="flex gap-3">
            <a href="/">
              <i className="fa-brands fa-facebook-f size-6"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter size-6"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram size-6"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-youtube size-6"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div className="py-6 px-8 text-gray-400 flex justify-between">
        <p>Made by Ayan Bhowal Idealised by Sanidhya Agarwal</p>
        <div>Payment options: Cash. Gpay. PhonePe. Paytm.</div>
      </div>
    </footer>
  );
};

export default Footer;
