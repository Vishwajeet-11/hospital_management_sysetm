/* eslint-disable no-unused-vars */
import React from "react";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your trusted medical health care provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
