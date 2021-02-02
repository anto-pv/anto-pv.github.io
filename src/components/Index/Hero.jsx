import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from './Title';
//import AboutImg from '../Image/AboutImg';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from '../image';

const Hero = () => {
  const data = (useStaticQuery(graphql`
  query MyQuery {
    allContentfulPortfolio {
        nodes {
          prtfolioLink
        }
    }
  }`))
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <div>
    <section id="hero" className="jumbotron">
      <div class="canvas black">
	      <div class="top"></div>
	      <div class="right"></div>
      </div>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            Hi, I am {' '}
            <span className="text-color-main">Anto P V</span>
            <br />
            I'm gonna burn this place to ground.
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="#about" smooth duration={1000}>
                Know more
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to={data.allContentfulPortfolio.nodes[0].prtfolioLink} smooth duration={1000}>
                Resume
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Image />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    'I am  Computer Science Student at Mar Athanasius College of Engineering, Kothmangalam '}
                </p>
                <p className="about-wrapper__info-text">
                {
                  'Address: Punneliparambil(H),Kombodinjamakkal,P O Thzhekkad, Thrissur, Kerala'}
                </p>
                <p className="about-wrapper__info-text">
                  {'I will fill this later'}
                </p>
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={data.allContentfulPortfolio.nodes[0].prtfolioLink}
                    >
                      Resume
                    </a>
                  </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section></div>
  );
};

export default Hero;