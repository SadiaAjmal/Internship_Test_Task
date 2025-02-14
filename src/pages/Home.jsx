import React from "react";

import Hero from "../components/Hero";
import Process from "../components/Process";
import Updates from "../components/Updates";
import InternshipsAndCountings from "../components/InternshipsAndCountings";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import Work from "../components/Work";
import NeedHelp from "../components/NeedHelp";


const Home = () => {
  return (
    <div>
      <Hero />
      <Process />
      <NeedHelp />
      <Work />
      <InternshipsAndCountings />
      <Skills />
      <NeedHelp />
      <Contact />
      <GetStarted />
      <Updates />
    </div>
  );
};

export default Home;
