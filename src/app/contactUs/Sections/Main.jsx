import React from "react";
import Form from "../Components/Form";

const Main = () => {
  return (
    <section className="flex py-[7em] w-full px-6 md:flex-col md:w-full md:justify-center md:px-0">
      <div className="flex flex-col px-[15px] w-[50%] my-[25px] md:w-full">
        <h2 className=" font-body text-[46.8px] font-bold pb-[20px] mb-[20px]">
          Get In Touch
        </h2>
        <p className="text-[18px] font-body text-accent-color mb-[25px] leading-normal">
          Dekho Bhai mai Room No 661 Mai rehta hu - G Block mai. Yeh Contect
          form aise hi daal diya hai - isko Intergrate nhi karra mai ab - theek
          hai !!
        </p>
        <ul className="flex flex-col gap-4 text-[18px]">
          <li className="text-accent-color ">
            <i className="fa-solid fa-phone text-dark-color mr-2"></i>+91
            6386189089
          </li>
          <li className="text-accent-color ">
            <i className="fa-regular fa-envelope text-dark-color mr-2"></i>
            valscotech.com
          </li>
          <li className="text-accent-color ">
            <i class="fa-solid fa-location-dot text-dark-color mr-2"></i>North
            Melbourne VIC 3051, Australia
          </li>
        </ul>
        <br />
        <h3 className="font-body font-bold text-2xl mb-6">Social Links</h3>
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
      <div className="flex flex-col px-[15px] w-[50%] my-[25px] mr-2 md:w-full md:mr-0 md:flex-col">
        <h2 className=" font-body text-[46.8px] font-bold pb-[20px] mb-[20px]">
          Send Us A Message
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default Main;
