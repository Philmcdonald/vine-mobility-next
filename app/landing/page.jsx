"use client";

import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import { Box } from "@chakra-ui/react";
import Service from "./components/Service";
// import Reseller from './components/Reseller'
import WhyCharge from "./components/WhyCharge";
import Platform from "./components/Platform";
import Testimony from "./components/Testimony";
// import Action from './components/Action'


const Landing = () => {
  return (
    <Box>

      <Hero />
      <Sponsor />
      <Service />
      {/* <Reseller /> */}
      <WhyCharge />
      <Platform />
      <Testimony />
      {/* <Action /> */}
    </Box>
  );
};

export default Landing;
