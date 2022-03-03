/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { errorToast, successToast } from "./../../Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    let data = {
      email: formData.email,
      name: formData.name,
      message: formData.message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.status === 200) {
          setSubmitted(true);
          setFormData({ email: "", name: "", message: "" });
          successToast("Successfully Sent! Check your email for response");
        } else {
          errorToast();
        }
        console.log(res.json());
      })
      .catch(err => {
        errorToast();
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form
      className="flex justify-center items-center  bg-aaftab flex-1 w-full rounded-2xl m-3 p-6 "
      onSubmit={handleSubmit}
    >
      <div className="flex w-full min-h-full p-4 border-chaand border-4 rounded-2xl flex-col justify-between items-start gap-y-6">
        <div className="flex flex-col w-full items-start justify-center gap-y-2 mobilebelow:gap-y-4">
          <div className="w-full flex items-start justify-between mobilebelow:flex-col">
            <div className="basis-2/12  flex ">
              <div className=" text-right flex-1 mobilebelow:pb-2">To:</div>
            </div>
            <div className="basis-9/12">
              <div className=" font-poppins-heading underline underline-offset-2 decoration-accent flex items-center ">
                <img
                  alt="saksham raheja"
                  src={"/main.jpg"}
                  className="h-5 mr24 rounded-full "
                />
                <div className="px-4">Saksham Raheja</div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-start justify-between mobilebelow:flex-col">
            <div className="basis-2/12  flex ">
              <div className="text-right flex-1 mobilebelow:pb-2">From:</div>
            </div>
            <div className="basis-9/12 w-full">
              <div className="font-poppins-heading flex items-center ">
                <RiAccountCircleLine
                  size={20}
                  className=" mr-2 rounded-full "
                />
                <input
                  disabled={submitted}
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="placeholder:font-poppins-heading p-4 h-8 rounded-2xl border border-accent-light focus:border-noor w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[2px] bg-chaand w-full rounded-full"></div>

        <div className="flex flex-col justify-between items-start w-full flex-1 desktopup:px-10 gap-y-4">
          <input
            disabled={submitted}
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name..."
            className="placeholder:font-poppins-heading p-4 h-8 rounded-2xl w-full border border-chaand focus:border-accent focus:border"
          />

          <textarea
            disabled={submitted}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            className="resize-none w-full p-4 h-36 rounded-xl border-chaand border  focus:border-accent focus:border"
          ></textarea>
          <button
            // disabled={submitted}
            type="submit"
            className="w-1/2 flex items-center justify-center mx-auto bg-accent-light p-3 rounded-2xl hover:bg-accent disabled:line-through"
          >
            &nbsp; Send &nbsp; <AiOutlineSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
