/* eslint-disable no-unused-vars */
import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

const Appointment = () => {

  return (
    <>
      <Hero title={"Enter Details Necessary To Schedule an Appointment"} imageUrl={"/contact.png"}/>
      <AppointmentForm/>
    </>
  )
};

export default Appointment;
