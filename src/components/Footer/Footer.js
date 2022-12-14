import React from "react";
import { Container } from "react-bootstrap";
import { Box, Title } from "../Core";

const Footer = ({ isDark = true }) => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box
        bg="bg"
        pt={[0, null, null, "3.75rem"]}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
        className="position-relative"
      >
        <Container>
          <div className="text-center">
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem;
              `}
              className="text-uppercase"
            >
              © { year } All right reserved
            </Title>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
