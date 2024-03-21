import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="bg-no-repeat relative flex flex-col min-h-screen bg-cover bg-bottom bg-blend-overlay"
        style={{
          backgroundImage: "url('/src/assets/GS1.png')",
          backgroundPosition: "left center",
          backgroundSize: "130%",
          maxWidth: "100vw",
        }}
      >
        <div className="absolute inset-0 md:bg-transparent bg-black opacity-50 z-0"></div>
        <div className="flex flex-col flex-grow my-48 items-center md:items-start md:ml-24 z-20">
          <p className="text-white font-Inter text-center text-2xl">
            To the end of the <br />{" "}
            <span className="text-white font-Oldenglish text-9xl">world</span>{" "}
            <br />
          </p>
          <p className="text-xs text-white font-Inter text-center">
            Evangelist Isaac Omolehin is a Preacher called and <br />
            ordained to preach the gospel and bring men to Christ
          </p>
        </div>

        <div className="flex z-50">
          <div className="bg-white bg-opacity-80 flex flex-row ">
            <p className=" py-16 px-20 md:py-20 md:px-56 font-Inter">
              "<span className="font-Oldenglish text-3xl">G</span>o therefore
              and make disciples of all nations, baptizing them in the name of
              the Father and of the Son and of the Holy Spirit, and teaching
              them to obey everything that I have commanded you. And remember, I
              am with you always, to the end of the age.” <br />{" "}
              <span className="font-bold font-Inter">Matthew 28:19-20</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-black flex-col md:flex-row">
        <div
          className="bg-no-repeat relative min-h-[50vh] max-w-[30%] bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/src/assets/GS2.png')",
            backgroundPosition: "center top",
            backgroundSize: "160%",
            // maxWidth: "100vw",
          }}
        ></div>
        <div className="flex flex-1 opacity-75 bg-white items-center">
          <p>
            Evangelist Isaac Omolehin is the President and Founder of Word
            Assembly Ministries in Ilorin, Kwara State, Nigeria. He is an
            Evangelist and Teacher of the Word whose ministry is characterised
            by notable and creative miracles.
          </p>
          <a
            href="/about"
            className="font-Inter text-black rounded-md px-4 py-2 border border-black"
          >
            MORE
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
