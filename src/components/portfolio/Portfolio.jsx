import React from "react";
import "./portfolio.css";
import gamehub from "../../assets/gamehub.png";
import nutrirecipe from "../../assets/nutrirecipe.png";
import nomadic from "../../assets/nomadAIc.png";

import { AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Selected Projects</h2>

      <div className="container portfolio__container">
        <div className="project">
          <h5>Recipe Finder </h5>
          <div className="project__description">
            <p>
              NutriRecipe is a user-friendly application designed to cater to
              anyone seeking culinary inspiration. Effortlessly search for
              recipes based on desired ingredients, macronutrients, and dietary
              preferences.
            </p>
          </div>
        </div>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={nutrirecipe} alt="landingpage" />
          </div>
          <div className="links">
            <a
              href="https://github.com/syscilythedeveloper/RecipeRefactor"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://nutrirecipe-sb.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <AiOutlineArrowRight className="portfolio__icon" />

        <div className="project">
          <h5>NomadAIC </h5>
          <div className="project__description">
            <p>
              An AI-powered mobile app used to automate itinerary generation for
              a tailored and hassle-free planning experience
            </p>
          </div>
        </div>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={nomadic} alt="landingpage" />
          </div>
          <div className="links">
            <a
              href="https://lakshmiswathi293.wixstudio.io/nomadaic"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <AiOutlineArrowRight className="portfolio__icon" />
        <div className="project">
          <h5>Game Hub</h5>
          <div className="project__description">
            <p>
              Unleash the power of gaming with the Gaming Hub — a dynamic
              project that revolutionizes your gaming experience. This
              application, driven by TypeScript, Chakra UI, and the rawg.io API,
              provides an intuitive platform for gamers.
            </p>
          </div>
        </div>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gamehub} alt="landingpage" />
          </div>
          <div className="links">
            <a
              href="https://github.com/syscilythedeveloper/game_app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://game-hub-five-dusky.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <div className="github__link">
        <a
          href="https://github.com/syscilythedeveloper"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Check out my Github!
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
