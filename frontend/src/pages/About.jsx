import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

import NewsLetter from "../components/NewsLetter";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and desire to
            revolution,discover,explore and purchase a wide range of products
            for the comforts of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessely to create a diverse
            collection. We offer a extensive collections sourced from trusted
            brands and suppliers
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission at forever is to empower customers with choice,
            convienice and reliable that exceeds expections, from browsing and
            ordering to delievery and beyond
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-4">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Qulaity Assurance:</b>
          <p className="text-gray-600">
            We meticoulsy selecta and wet each product to ensure it meets our
            stingment quality standards.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience:</b>
          <p className="text-gray-600">
            With our user-friendly and hassle free ordering process, shopping
            experience we provide the excellent convience for our customers
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We provide an excellent coustomer service to our customers. Our team
            of professionals is here you to assist the way, ensuring the
            satisfication of our customer.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
