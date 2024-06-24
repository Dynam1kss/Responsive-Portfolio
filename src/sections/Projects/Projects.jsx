import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

// logo images
import adventureTRVL from "../../assets/adventure-trvl-logo.png";
import musicPlayer from "../../assets/music-player-logo.png";
import photoCollection from "../../assets/photo-collection-logo.png";
import currencyConverter from "../../assets/currency-converter-logo.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={adventureTRVL}
          link="https://github.com/Dynam1kss/React-Adventure-Website"
          h3="React Adventure"
          p="Landing page travel"
        />
        <ProjectCard
          src={musicPlayer}
          link="https://github.com/Dynam1kss/Music-Player-Spotify"
          h3="Music Player Spotify"
          p="Spotify API player"
        />
        <ProjectCard
          src={photoCollection}
          link="https://github.com/Dynam1kss/Photo-Collection"
          h3="Photo Collection"
          p="Gallery of pictures"
        />
        <ProjectCard
          src={currencyConverter}
          link="https://github.com/Dynam1kss/Currency-Converter"
          h3="Currency Converter"
          p="Calculates currency"
        />
      </div>
    </section>
  );
}

export default Projects;
