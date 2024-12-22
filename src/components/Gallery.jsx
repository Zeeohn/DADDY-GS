import React, { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import Hero from "./Hero";
import eventsData from "../data/events.json";
import messagesData from "../data/messages.json";
import shiloh1 from "../assets/shiloh-1.jpg";
import shiloh2 from "../assets/shiloh-2.jpg";
import shiloh3 from "../assets/shiloh-3.jpg";
import shiloh5 from "../assets/shiloh-5.jpg";
import shiloh4 from "../assets/shiloh-4.jpg";
import shiloh6 from "../assets/shiloh-6.jpg";
import shiloh7 from "../assets/shiloh-7.jpg";
import shiloh8 from "../assets/shiloh-8.jpg";
import shiloh9 from "../assets/shiloh-9.jpg";
import shiloh10 from "../assets/shiloh-10.jpg";
import gere1 from "../assets/gere1.jpg";
import gere2 from "../assets/gere2.jpg";
import gere3 from "../assets/gere3.jpg";
import gere4 from "../assets/gere4.jpg";
import ecwa1 from "../assets/ecwa1.jpg";
import ecwa2 from "../assets/ecwa2.jpg";
import ecwa3 from "../assets/ecwa3.jpg";
import ecwa4 from "../assets/ecwa4.jpg";
import oset1 from "../assets/oset1.jpg";
import oset2 from "../assets/oset2.jpg";
import old1 from "../assets/old1.jpg";
import old2 from "../assets/old2.jpg";
import old3 from "../assets/old3.jpg";
import old4 from "../assets/old4.jpg";
import old5 from "../assets/old5.jpg";
import old6 from "../assets/old6.jpg";
import bore1 from "../assets/bore1.jpg";
import bore2 from "../assets/bore2.jpg";
import bore3 from "../assets/bore3.jpg";
import bore4 from "../assets/bore4.jpg";
import bore5 from "../assets/bore5.jpg";
import bore6 from "../assets/bore6.jpg";
import bore7 from "../assets/bore7.jpg";
import oth1 from "../assets/oth1.jpg";
import oth2 from "../assets/oth2.jpg";
import oth3 from "../assets/oth3.jpg";
import oth4 from "../assets/oth4.jpg";
import oth5 from "../assets/oth5.jpg";
import oth6 from "../assets/oth6.jpg";
import oth7 from "../assets/oth7.jpg";
import oth8 from "../assets/oth8.jpg";
import oth9 from "../assets/oth9.jpg";
import oth10 from "../assets/oth10.jpg";
import oth11 from "../assets/oth11.jpg";
import oth12 from "../assets/oth12.jpg";
import oth13 from "../assets/oth13.jpg";
import oth14 from "../assets/oth14.jpg";
import oth15 from "../assets/oth15.jpg";
import oth16 from "../assets/oth16.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [activeMessageTab, setActiveMessageTab] = useState("Series");
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
    setMessages(messagesData);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMessageTabChange = (tab) => {
    setActiveMessageTab(tab);
  };

  const filterEvents = (events) => {
    const today = new Date();
    switch (activeTab) {
      case "Past":
        return events.filter((event) => new Date(event.endDate) < today);
      case "Recent":
        return events.filter((event) => {
          const oneWeekFromEndDate = new Date(event.endDate);
          oneWeekFromEndDate.setDate(oneWeekFromEndDate.getDate() + 7);
          return (
            new Date(event.endDate) <= today && today <= oneWeekFromEndDate
          );
        });
      case "Ongoing":
        return events.filter(
          (event) =>
            new Date(event.startDate) <= today &&
            new Date(event.endDate) >= today
        );
      case "Upcoming":
        return events.filter((event) => new Date(event.startDate) > today);
      default:
        return events;
    }
  };

  const filteredEvents = filterEvents(events);

  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          PHOTO GALLERY
        </p>
      </div>
      <div className="px-4 py-8">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">Shiloh 2024</h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={shiloh7}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh2}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh3}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={shiloh4}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh5}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh6}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={shiloh1}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh8}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={shiloh9}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={shiloh10}
                  alt="shiloh 2024"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">
              Charity work at Gere-Alimi
            </h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={gere4}
                  alt="gere alimi reachout"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={gere1}
                  alt="gere alimi reachout"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={gere3}
                  alt="gere alimi reachout"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={gere2}
                  alt="gere alimi reachout"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">
              Ministration at ECWA Church
            </h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={ecwa1}
                  alt="ecwa ministration"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={ecwa2}
                  alt="ecwa ministration"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={ecwa3}
                  alt="ecwa ministration"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={ecwa4}
                  alt="ecwa ministration"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">At Rev. Oset's Church</h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={oset1}
                  alt="Rev. Oset church"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oset2}
                  alt="Rev. Oset Church"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">
              Commissioning of old people's home
            </h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={old1}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={old2}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={old3}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={old4}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={old5}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={old6}
                  alt="old peoples home commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">
              Commissioning of Borehole for the FRSC in Idofian
            </h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={bore1}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={bore2}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={bore3}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={bore4}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={bore5}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={bore6}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={bore7}
                  alt="Frsc borehole commissioning"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-12">Others</h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={oth1}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth2}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth3}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={oth4}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth5}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth6}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={oth7}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth8}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth9}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={oth10}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth11}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth12}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <img
                  src={oth13}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth14}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
                <img
                  src={oth15}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <img
                  src={oth16}
                  alt="other pictures"
                  className="md:w-[30vw] h-[50vh] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
