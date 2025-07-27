import React from "react";
import HospitalInfoSection from "./HospitalInfoSection";
import InfoCards from "./InfoCards";
import OurServicesSection from "./OurServicesSection";
import TrackRecordSection from "./TrackRecordSection";

import OurDoctorsSection from "./OurDoctorsSection";


const Home = () => {
  return (
    <>
      <HospitalInfoSection />
      <OurServicesSection />
      <OurDoctorsSection />
      <TrackRecordSection />
      <InfoCards />
    </>
  );
};

export default Home;
