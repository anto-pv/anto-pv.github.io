import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Index/Title';
import { graphql, useStaticQuery } from 'gatsby';
//import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const pjt = useStaticQuery(graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          projectTitle
          info{
            json
          }
          info2 {
            json
          }
          demoLink
          codeLink
          image {
            file {
              url
            }
            description
          }
        }
      }
    }
  }
  `)
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {pjt.allContentfulProject.edges.map((edge)=>{
            return(
              <Row key={edge.node.id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{edge.node.projectTitle}</h3>
                      <div>
                        <p>
                          {edge.node.info.json.content[0].content[0].value}
                        </p>
                        <p className="mb-4">{edge.node.info2.json.content[0].content[0].value}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={edge.node.demoLink}
                      >
                        See Live
                      </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={edge.node.codeLink}
                        >
                          Source Code
                        </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={'url'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <img src={edge.node.image.file.url} alt={edge.node.image.description} style={{height: "500px", width: "500px"}}/>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            )
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;