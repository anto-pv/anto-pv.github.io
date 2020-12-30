import React from "react"
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Index/Title';
const Contact = () => {
    return (
        <section id="contact">
          <Container>
            <Title title="Contact" />
            <Fade bottom duration={1000} delay={800} distance="30px">
              <div className="contact-wrapper">
                <p className="contact-wrapper__text">
                  You can reach me! Just by mail
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={`mailto:antopv833@gmail.com?subject=Hi%20there`}
                >
                  "Let's Talk"
                </a>
              </div>
            </Fade>
          </Container>
        </section>
      )}
export default Contact
