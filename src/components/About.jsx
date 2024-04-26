import React from "react";

const About = () => {
  return (
    <div className="border-b border-b-white">
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl border-b border-b-white text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          ABOUT
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-black">
        <div
          className="hidden md:flex bg-no-repeat relative h-screen w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/GS2.png')",
            backgroundPosition: "top",
            // backgroundSize: "200%",
            maxWidth: "100vw",
          }}
        ></div>
        <div
          className="flex md:hidden bg-no-repeat relative min-h-screen w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/GS2.png')",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex-1 py-4 bg-white md:border-t-2 md:border-t-black md:border-b-2 z-[100] md:border-b-black md:py-10">
          <p className="text-black text-lg font-Inter text-justify pt-2 md:py-0 px-10 md:px-12">
            <span className="text-black font-Oldenglish text-6xl">E</span>
            vangelist Isaac Omolehin was born in Iluke Bunu, Kabba Bunu Local
            Government Area of Kogi State, Nigeria. Isaac Omolehin is the
            President and Founder of Word Assembly Ministries in Ilorin, Kwara
            State, Nigeria. He is an Evangelist and Teacher of the Word whose
            ministry is characterised by notable and creative miracles. He
            organises 120 days crusade annually between January and April.
          </p>
          <h4 className="font-Inter text-black text-justify px-10 md:px-12 pt-3 text-lg font-bold">
            Education
          </h4>
          <p className="text-black text-lg font-Inter text-justify px-10 md:px-12">
            Because of a difficult childhood, he went through different schools
            in four different villages and towns before he could acquire Primary
            School Certificate. It will be one year in a place, then crises will
            arise and he will taken to another place. The difficulties went on
            till 1975 when he eventually got School Certificate by doing holiday
            farm labour to pay his school fees. The difficulties went on till he
            graduated in Animal Science from Rivers State University of Science
            and Technology, 1983.
          </p>
          <h4 className="font-Inter text-black text-justify px-10 md:px-12 pt-3 text-lg font-bold">
            Service Year
          </h4>
          <p className="text-black text-lg font-Inter text-justify px-10 md:px-12">
            The National service was done as a Traveling secretary with Nigeria
            Fellowship of Evangelical Students, NIFES
          </p>
          <h4 className="font-Inter text-black text-justify px-10 md:px-12 pt-3 text-lg font-bold">
            Marriage & Ordination
          </h4>
          <p className="text-black text-lg font-Inter text-justify px-10 md:px-12">
            Evangelist Isaac Omolehin got married to Dr. Mrs. Christie Omolehin
            whom he had met six years before in October 1982. In 1985, Rev. Mike
            Oye ordained Isaac Omolehin into the ministry. <br />
            Evangelist Isaac Omolehin and his wife are blessed with four
            children who are Pastors, and Missionaries in different nations.{" "}
            <br />
            Evangelist Isaac Omolehin has preached the gospel in all six
            continents of the world; wherever man is found.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
