import React from "react";
import HeroSection from "@/components/home/HeroSection";
import InfoCards from "@/components/home/InfoCards";
import HospitalInfoSection from "@/components/home/HospitalInfoSection";
import OurServicesSection from "@/components/home/OurServicesSection";
import TrackRecordSection from "@/components/home/TrackRecordSection";
import OurDoctorsSection from "@/components/home/OurDoctorsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoCards />
      <HospitalInfoSection />
      <OurServicesSection />
      <TrackRecordSection />
      <OurDoctorsSection />
    </>
  );
}


