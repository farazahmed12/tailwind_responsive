import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1040px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Want to see Tips and Tricks ?
          </h1>
          <p>Sign up to the news Letter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df98] text-black rounded-md w-[200px] ml-4 my-6 py-3 px-6">
              Notify Me
            </button>
          </div>
          <p>
            We care about your protection of data. kindly read our{" "}
            <span className="text-[#00df98]">Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
