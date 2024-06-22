import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

// logo images
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Dynam1kss/React-Adventure-Website"
          h3="React Adventure Website"
          p="Site landing page about trabeling"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Dynam1kss/Music-Player-Spotify"
          h3="Music Player Spotify"
          p="Web player based on Spotify API"
        />
        <ProjectCard
          src={hipster}
          link="https://github.com/Dynam1kss/Photo-Collection"
          h3="Photo Collection"
          p="Gallery of pictures"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Dynam1kss/Currency-Converter"
          h3="Currency Converter"
          p="Basic currency transfer system"
        />
      </div>
    </section>
  );
}

export default Projects;
