import { Fragment } from "react";
import PartnersSection from "@/components/partners/index";
import CaseStudiesSection from "../caseStudiesSection";
import ProcessSteps from "../processSteps";

const Home = () => {
  return (
    <Fragment>

      <PartnersSection/>
      <CaseStudiesSection/>
      <ProcessSteps/>
    </Fragment>
  );
};
export default Home;
