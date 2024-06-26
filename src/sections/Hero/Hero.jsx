import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

// light and dark icons
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import telegramLight from "../../assets/telegram-light.svg";
import telegramDark from "../../assets/telegram-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import discordLight from "../../assets/discord-light.svg";
import discordDark from "../../assets/discord-dark.svg";

import CV from "../../assets/CV-Oliinyk-Ivan.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const discordIcon = theme === "light" ? discordLight : discordDark;
  const telegramIcon = theme === "light" ? telegramLight : telegramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile img of Oliinyk Ivan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Oliinyk <br /> Ivan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/Dynam1ks" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://discordapp.com/users/620571894101311491"
            target="_blank"
          >
            <img src={discordIcon} alt="Discord icon" />
          </a>
          <a href="https://t.me/Dynam1ks" target="_blank">
            <img src={telegramIcon} alt="Telegram icon" />
          </a>
          <a href="https://github.com/Dynam1kss" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-oliinyk-41517b250/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
