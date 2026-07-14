import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import profile from "../assets/nnnnnn.jpg";

function Hero() {

  const [mouse, setMouse] = useState({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
});
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
    <div
  className="glow"
  style={{
    left: mouse.x,
    top: mouse.y,
  }}
></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },

          background: {
            color: {
              value: "#050816",
            },
          },

          fpsLimit: 120,

          particles: {
            number: {
              value: 70,
            },

            color: {
              value: "#38bdf8",
            },

            links: {
              enable: true,
              distance: 150,
              color: "#38bdf8",
              opacity: 0.3,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1.5,
              outModes: {
                default: "bounce",
              },
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: {
                min: 2,
                max: 5,
              },
            },
          },
        }}
      />

      <section
  id="home"
  className="hero"
  onMouseMove={(e) =>
    setMouse({
      x: e.clientX,
      y: e.clientY,
    })
  }
>

      <motion.div
      initial={{opacity:0,y:80}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
      >

      <img
      src={profile}
      alt="Profile"
      className="profile-img"
      />

      <h1>Hello, I'm Anshul Chauhan</h1>

      <h3 className="typing">
        Full Stack Developer 
      </h3>
      

      <p>
      I am a passionate Full Stack Web Developer and B.Tech CSE student at
      Tula's University, Dehradun. I specialize in building responsive,
      user-friendly web applications using React.js, Node.js,
      Express.js and MongoDB.
      </p>

      <div className="hero-buttons">

      <a href="/resume.pdf" download>
      <button className="resume-btn">
      Download Resume
      </button>
      </a>

      <a href="#contact">
      <button className="contact-btn">
      Contact Me
      </button>
      </a>

      </div>

      <div className="social-icons">

      <a
      href="https://github.com/anshulcodes11"
      target="_blank"
      rel="noreferrer"
      >
      <FaGithub />
      </a>

      <a
      href="https://www.linkedin.com/in/anshul-chauhan-5168b835a/"
      target="_blank"
      rel="noreferrer"
      >
      <FaLinkedin />
      </a>

      <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      >
      <FaInstagram />
      </a>

      </div>

      </motion.div>

      </section>

    </>
  );
}

export default Hero;