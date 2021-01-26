import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Footer.css';

function Footer() {

  return (
    <Container className="appFooter">
      <Typography variant="h6" className="footerTitle">
        &copy; 2021 - Jeremy Penning
      </Typography>
    </Container>
  );
}

export default Footer;