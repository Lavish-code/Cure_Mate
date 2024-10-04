import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to CureMate Healthcare | Your Trusted Healthcare Provider"
        }
        imageUrl={"/doctors.png"}
      />
      <Biography imageUrl={"/heybaby.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
