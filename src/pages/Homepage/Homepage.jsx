import React from 'react';
import './Homepage.scss';
import { Navbar, Footer } from '../../components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../../data';
import MovingText from '../../components/MovingText/MovingText';
import Typewriter from 'typewriter-effect';
import faceImage from '../../assets/faceImage.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../background.css';

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
    >
      <Navbar />

      <div className="contents">
        <div>
          <LazyLoadImage
            // src={data.imageHome}
            src={faceImage}
            alt="Akshay Sethiya"
            className="image"
            effect="blur"
            height={250}
            width={250}
          />
        </div>

        <p>My name is </p>
        <div className="name">
          <h1 className="gradient__text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${data.name}`)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(`${data.name}`)
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          <h3>{data.contentBelowName}</h3>
        </div>
        <p className="details">
          I'm a
          <span className="gradient__text">
            <strong> {data.majorSkill1} </strong>
          </span>
          specialized in building exceptional websites.
        </p>

        <Link to="/Contact" className="cta-btn">
          Hire Me
        </Link>
      </div>

      <div className="moving">
        <MovingText text={data.name} />
      </div>
      <Footer />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Homepage;
