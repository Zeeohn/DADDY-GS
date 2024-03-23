import React from "react";
import GS2 from "/src/assets/GS2.png";

const About = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          ABOUT
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="hidden md:flex bg-no-repeat relative min-h-screen w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/src/assets/GS2.png')",
            backgroundPosition: "center top",
            backgroundSize: "170%",
            maxWidth: "100vw",
          }}
        ></div>
        <div
          className="flex md:hidden bg-no-repeat relative min-h-screen w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/src/assets/GS2.png')",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex-1">
          <p className="text-black text-lg font-Inter text-justify pt-10 md:py-0 px-10 md:px-24">
            <span className="text-black font-Oldenglish text-6xl">E</span>
            vangelist Isaac Omolehin is the President and Founder of Word
            Assembly Ministries in Ilorin, Kwara State, Nigeria. He is an
            Evangelist and Teacher of the Word whose ministry is characterised
            by notable and creative miracles. He organises 120 days crusade
            annually between January and April.
          </p>
          <p className="text-black text-lg font-Inter text-justify px-10 md:px-24 mt-4">
            Evangelist Isaac Omolehin preaches to millions of people every day
            on two radio stations. He has taken the Gospel to all the six
            continents of the world with great effects.
          </p>
          <p className="text-black text-lg font-Inter text-justify pb-14 md:pb-0 px-10 md:px-24 mt-4">
            He is married to Dr. (Mrs) Christie Omolehin with whom he founded
            Hope Orphanage which is home to over 70 children who live with them.
            They have four biological children of their own who are pastors and
            missionaries in different nations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
