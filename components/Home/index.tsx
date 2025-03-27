import { Fragment } from "react";
import PartnersSection from "@/components/partners/index";
import CaseStudiesSection from "../caseStudiesSection";
import ProcessSteps from "../processSteps";
import WhyChooseUs from "@/components/whyChooseUs/index";
import StepTimeline from "@/components/stepTimeline/index";
import BlogSection from "@/components/blogSection/index";
import AboutSection from "@/components/about/index";
import ITSection from "../itSection";

const Home = () => {
  return (
    <Fragment>
     
      <PartnersSection/>
      <CaseStudiesSection/>
      <ProcessSteps/>
      <ITSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <StepTimeline/>
      <BlogSection/> 
    </Fragment>
  );
};
export default Home;
