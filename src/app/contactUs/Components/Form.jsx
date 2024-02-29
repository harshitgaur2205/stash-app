import React from "react";

const Form = () => {
  return (
    <form action="/" method="get" className="flex flex-col gap-6 w-full">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-full h-[50px] border border-grey-color bg-light-color rounded-[4px] px-[15px] py-[6px]"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full h-[50px] border border-grey-color bg-light-color rounded-[4px] px-[15px] py-[6px]"
        required
      />
      <textarea
        name="Message"
        id="message"
        placeholder="Message"
        className="w-full border border-grey-color bg-light-color rounded-[4px] px-[15px] py-[6px] h-[180px]"
      ></textarea>
      <label>
        <input type="checkbox" name="T&C" id="t&c" required />
        <span className=" text-accent-color px-2">
          I agree all the{" "}
          <a href="/" className=" text-dark-color">
            Terms and Conditions
          </a>
        </span>
      </label>
      <button
        type="submit"
        className="w-full h-[66px] hover:bg-primary-color bg-dark-color text-light-color text-lg text-center rounded-md"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
