"use client";
import ContactUsSection from "./ContactUsSection/ContactUsSection";
import MainSection from "./MainSection/MainSection";
import ProjectSection from "./ProjectsSection/ProjectSection";
import ServiceSection from "./ServicesSection/ServiceSection";

export default function SectionContainer() {
  return (
    <div className="w-full">
      <MainSection />
      <ProjectSection />
      <ServiceSection />
      <ContactUsSection />
    </div>
  );
}
