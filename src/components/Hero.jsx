const whatsappNumber = "+2349162439716";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

const Hero = () => {
  return (
    <>
      <div
        className="hidden bg-no-repeat relative md:flex flex-col min-h-screen bg-cover bg-bottom bg-blend-overlay"
        style={{
          backgroundImage: "url('/GS1.png')",
          backgroundPosition: "left center",
          backgroundSize: "130%",
          maxWidth: "100vw",
        }}
      >
        <div className="absolute left-0 right-0 h-16 py-2 flex flex-row bg-black opacity-70 justify-center items-center text-white font-Inter text-2xl z-20">
          TO GET IN TOUCH, REACH OUT VIA WHATSAPP ONLY:{" "}
          <a href={whatsappLink} className="font-extrabold font-sans">
            &nbsp; +234 916 243 9716
          </a>
        </div>
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
              &quot;<span className="font-Oldenglish text-3xl">G</span>o
              therefore and make disciples of all nations, baptizing them in the
              name of the Father and of the Son and of the Holy Spirit, and
              teaching them to obey everything that I have commanded you. And
              remember, I am with you always, to the end of the age.” <br />{" "}
              <span className="font-bold font-Inter">Matthew 28:19-20</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex md:hidden bg-no-repeat relative flex-col min-h-screen bg-cover bg-bottom bg-blend-overlay"
        style={{
          backgroundImage: "url('/GS1.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 md:bg-transparent bg-black opacity-70 z-0"></div>
        <div className="absolute left-0 right-0 h-16 py-2 px-2 flex flex-row flex-wrap bg-black opacity-70 justify-center text-white font-Inter text-[10px] z-20">
          TO GET IN TOUCH, REACH OUT VIA WHATSAPP ONLY:{" "}
          <a href={whatsappLink} className="font-extrabold font-sans">
            &nbsp; +234 916 243 9716
          </a>
        </div>
        <div className="flex flex-col flex-grow my-48 items-center justify-center z-20">
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
            <p className="py-16 px-16 font-Inter">
              &quot;<span className="font-Oldenglish text-3xl">G</span>o
              therefore and make disciples of all nations, baptizing them in the
              name of the Father and of the Son and of the Holy Spirit, and
              teaching them to obey everything that I have commanded you. And
              remember, I am with you always, to the end of the age.” <br />{" "}
              <span className="font-bold font-Inter">Matthew 28:19-20</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-black flex-row">
        <div
          className="bg-no-repeat relative min-h-[50vh] max-w-[30%] bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/GS2.png')",
            backgroundPosition: "center top",
            backgroundSize: "160%",
            // maxWidth: "100vw",
          }}
        ></div>
        <div className="flex flex-1 px-52 opacity-75 flex-col bg-white justify-center">
          <p>
            Evangelist Isaac Omolehin is the President and Founder of Word
            Assembly Ministries in Ilorin, Kwara State, Nigeria. He is an
            Evangelist and Teacher of the Word whose ministry is characterised
            by notable and creative miracles.
          </p>
          <a
            href="/about"
            className="font-Inter w-fit text-black rounded-md px-6 py-2 border mt-8 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
          >
            MORE
          </a>
        </div>
      </div>
      <div className="md:hidden bg-black flex-col">
        <div
          className="bg-no-repeat relative min-h-[50vh] max-w-full bg-cover bg-blend-overlay flex-1"
          style={{
            backgroundImage: "url('/GS2.png')",
            backgroundPosition: "center",
            // backgroundSize: "160%",
            // maxWidth: "100vw",
          }}
        ></div>
        <div className="flex py-16 px-16 opacity-75 flex-col bg-white justify-center">
          <p>
            Evangelist Isaac Omolehin is the President and Founder of Word
            Assembly Ministries in Ilorin, Kwara State, Nigeria. He is an
            Evangelist and Teacher of the Word whose ministry is characterised
            by notable and creative miracles.
          </p>
          <a
            href="/about"
            className="font-Inter w-fit text-black rounded-md px-6 py-2 border mt-8 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
          >
            MORE
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
