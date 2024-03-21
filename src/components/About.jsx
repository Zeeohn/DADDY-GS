import React from "react";
import GS2 from "/src/assets/GS2.png";

const About = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <p className="tracking-[0.3em] text-3xl font-Inter font-medium text-center py-10 text-white">
          ABOUT
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="bg-no-repeat relative min-h-screen w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/src/assets/GS2.png')",
            backgroundPosition: "center top",
            backgroundSize: "170%",
            maxWidth: "100vw",
          }}
        ></div>
        <div className="flex-1">
          <p className="text-black text-lg font-Inter text-justify px-24">
            <span className="text-black font-Oldenglish text-6xl">E</span>
            vangelist Isaac Omolehin is the President and Founder of Word
            Assembly Ministries in Ilorin, Kwara State, Nigeria. He is an
            Evangelist and Teacher of the Word whose ministry is characterised
            by notable and creative miracles. He organises 120 days crusade
            annually between January and April.
          </p>
          <p className="text-black text-lg font-Inter text-justify px-24 mt-4">
            Evangelist Isaac Omolehin preaches to millions of people every day
            on two radio stations. He has taken the Gospel to all the six
            continents of the world with great effects.
          </p>
          <p className="text-black text-lg font-Inter text-justify px-24 mt-4">
            He is married to Dr. (Mrs) Christie Omolehin with whom he founded
            Hope Orphanage which is home to over 70 children who live with them.
            They have four biological children of their own who are pastors and
            missionaries in different nations.
          </p>
        </div>
      </div>
      {/* <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={GS2}
            alt="Person"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-2xl font-bold mb-4">ABOUT</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-white font-semibold">Project Hope</span>{" "}
            provides a tax-deductible opportunity for people to use their
            resources, education, and talents to alleviate some of the
            challenges encountered between January and April.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Our mission is to help those in need in an environment that is
            sustainable and dignified. We work with communities to identify
            their needs and develop solutions with them. Our approach is to
            foster local ownership and participation, utilizing available
            resources and appropriate technologies in a culturally sensitive
            manner.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
