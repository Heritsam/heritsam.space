import React from 'react';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <Link to="contacts" spy={true} smooth={true} offset={-50} duration={1000}>
      contact
    </Link>
  );
};

export default Contact;
