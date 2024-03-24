import React, { useState } from "react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("Ministrations");

  const [dropActive, setDropActive] = useState(false);

  const [selectedDrop, setSelectedDrop] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [selectedOption, setSelectedOption] = useState("In-Person");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState("Public");

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownOptions = [
    "Radio Station",
    "Independent Blog",
    "Newspaper",
    "TV Station",
    "Magazine",
  ];

  const renderForm = () => {
    switch (activeTab) {
      case "Ministrations":
        return (
          <form>
            <label
              htmlFor="event"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Event Host / Church Name
            </label>
            <input
              name="event"
              id="event"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="position" className="font-Inter font-bold text-sm">
              Your position in the organization
            </label>
            <input
              name="position"
              id="position"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="host" className="font-Inter font-bold text-sm">
              Host pastor (first & last name)
            </label>
            <input
              name="host"
              id="host"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="theme" className="font-Inter font-bold text-sm">
              Event name and the vision/theme for the event
            </label>
            <input
              name="theme"
              id="theme"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="scripture" className="font-Inter font-bold text-sm">
              Is there a scripture that the Lord has given you concerning this
              event?
            </label>
            <input
              name="scripture"
              id="scripture"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="email" className="font-Inter font-bold text-sm">
              Your email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="phone" className="font-Inter font-bold text-sm">
              Phone number
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="ministers" className="font-Inter font-bold text-sm">
              Are there other minsters ministering? If yes, who are they?
            </label>
            <input
              name="ministers"
              id="ministers"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="start" className="font-Inter font-bold text-sm">
              Start date of event
            </label>
            <input
              name="start"
              id="start"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label htmlFor="end" className="font-Inter font-bold text-sm">
              End date of event
            </label>
            <input
              name="end"
              id="end"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <p className="font-Inter font-bold text-sm">Description of event</p>
            <div className="flex items-center space-x-4 pt-1 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="In-Person"
                  checked={selectedOption === "In-Person"}
                  onChange={handleOptionChange}
                  className="form-radio text-black h-5 w-5"
                />
                <span className="ml-2 text-black font-Inter text-sm font-medium">
                  In-Person
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Virtual"
                  checked={selectedOption === "Virtual"}
                  onChange={handleOptionChange}
                  className="form-radio text-black h-5 w-5"
                />
                <span className="ml-2 text-black font-Inter text-sm font-medium">
                  Virtual
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Other"
                  checked={selectedOption === "Other"}
                  onChange={handleOptionChange}
                  className="form-radio text-black h-5 w-5"
                />
                <span className="ml-2 text-black font-Inter text-sm font-medium">
                  Other
                </span>
              </label>
            </div>
            <label htmlFor="other" className="font-Inter font-bold text-sm">
              Specify other (if applicable)
            </label>
            <input
              name="other"
              id="other"
              type="text"
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="expectations"
              className="font-Inter font-bold text-sm"
            >
              What are your expectations for Evangelist Isaac Omolehin’s
              participation in this event? (Include details about how many
              sessions you want the team to minister at)
            </label>
            <input
              name="expectations"
              id="expectations"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <p className="font-Inter font-bold text-sm">
              Will the event be private or open to the public?
            </p>
            <div className="flex items-center space-x-4 pt-1 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Public"
                  checked={selectedOption2 === "Public"}
                  onChange={handleOptionChange2}
                  className="form-radio text-black h-5 w-5"
                />
                <span className="ml-2 text-black font-Inter text-sm font-medium">
                  Public
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Private"
                  checked={selectedOption2 === "Private"}
                  onChange={handleOptionChange2}
                  className="form-radio text-black h-5 w-5"
                />
                <span className="ml-2 text-black font-Inter text-sm font-medium">
                  Private
                </span>
              </label>
            </div>
            <label htmlFor="details" className="font-Inter font-bold text-sm">
              Are there any other details you think we should know?
            </label>
            <textarea
              name="details"
              id="details"
              type="text"
              rows={4}
              columns={50}
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                name="confirm"
                id="confirm"
                required
                className="text-black h-8 w-8"
              />
              <p className="font-Inter text-xs">
                I understand that this Event Request Form will be used by
                Evangelist Isaac Omolehin for the purpose of coordinating
                agendas. Submission of this form is only a request and DOES NOT
                CONFIRM his participation in said event. <br /> <br />
                (The correct information is required to process this request.
                After review, we will reach out to you concerning next steps.)
              </p>
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-transparent hover:text-black hover:border hover:border-black px-6 py-2 text-white mt-8 font-Inter font-bold text-sm"
            >
              SUBMIT
            </button>
          </form>
        );
      case "Testimonies":
        return (
          <form>
            <label
              htmlFor="name"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Full name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="email"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="location"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Location
            </label>
            <input
              name="location"
              id="location"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="subject"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Subject
            </label>
            <input
              name="subject"
              id="subject"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="testimony"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Testimony
            </label>
            <textarea
              name="testimony"
              id="testimony"
              type="text"
              rows={4}
              columns={50}
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <button
              type="submit"
              className="bg-black hover:bg-transparent hover:text-black hover:border hover:border-black px-6 py-2 text-white mt-8 font-Inter font-bold text-sm"
            >
              SUBMIT
            </button>
          </form>
        );
      case "Media Requests":
        return (
          <form>
            <label
              htmlFor="type"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Type of Organization
            </label>
            <input
              name="type"
              id="type"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="organization"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Organization
            </label>
            <input
              name="organization"
              id="organization"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="location"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Location
            </label>
            <input
              name="location"
              id="location"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="subject"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Subject
            </label>
            <input
              name="subject"
              id="subject"
              type="text"
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <label
              htmlFor="testimony"
              className="font-Inter pt-2.5 font-bold text-sm"
            >
              Testimony
            </label>
            <textarea
              name="testimony"
              id="testimony"
              type="text"
              rows={4}
              columns={50}
              required
              className="mb-2 font-Inter w-full p-2 text-sm bg-gray-200 rounded-md"
            />
            <button
              type="submit"
              className="bg-black hover:bg-transparent hover:text-black hover:border hover:border-black px-6 py-2 text-white mt-8 font-Inter font-bold text-sm"
            >
              SUBMIT
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          GET IN TOUCH
        </p>
      </div>
      <div className="md:max-w-[60vw] mx-auto p-6">
        <p className="font-Inter pt-2 font-bold text-lg flex justify-center">
          We’d love to hear from you. For ministrations, testimonies, or media
          requests, kindly fill out any of the forms below and we’ll be in
          touch.
        </p>
        <div className="my-8">
          <div className="flex flex-col md:flex-row md:justify-evenly mb-8 bg-gray-300 rounded-md">
            <button
              onClick={() => handleTabChange("Ministrations")}
              className={`md:w-full px-4 py-2 rounded-md font-Inter font-medium ${
                activeTab === "Ministrations"
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              Ministrations
            </button>
            <button
              onClick={() => handleTabChange("Testimonies")}
              className={`md:w-full px-4 py-2 rounded-md font-Inter font-medium ${
                activeTab === "Testimonies"
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              Testimonies
            </button>
            <button
              onClick={() => handleTabChange("Media Requests")}
              className={`md:w-full px-4 py-2 rounded-md font-Inter font-medium ${
                activeTab === "Media Requests"
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              Media Requests
            </button>
          </div>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
