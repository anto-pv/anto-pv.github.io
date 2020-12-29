import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import {nanoid} from 'nanoid'
import { FaRegHeart, FaHackerrank } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="#header" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
            <a
                key = {nanoid()}
                href={'https://github.com/anto-pv'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={'github'}
            >
                <i className={`fa fa-${'github' || 'refresh'} fa-inverse`} />
            </a>
            <a
                key={nanoid()}
                href={'https://www.hackerrank.com/antopv833'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={'hackerrank'}
            >
                <FaHackerrank />
            </a>
            <a
                key={nanoid()}
                href={'http://www.linkedin.com/in/anto-p-v-0a168b1b1'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={'linkedin'}
            >
                <i className={`fa fa-${'linkedin' || 'refresh'} fa-inverse`} />
            </a>
            <a
                key={nanoid()}
                href={'https://twitter.com/Anto_P_V_'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={'twitter'}
            >
                <i className={`fa fa-${'twitter' || 'refresh'} fa-inverse`} />
            </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Built <FaRegHeart />with Gatsby
        </p>
      </Container>
    </footer>
  );
};

export default Footer;