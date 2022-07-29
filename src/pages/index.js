import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero"
import Works from "../sections/landing6/Works";
import Contact from "../sections/landing8/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Element name="contacts">
          <Contact />
        </Element>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
