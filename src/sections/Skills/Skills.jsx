import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

// light and dark icons
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";

function Skills() {
  const { theme, toggleTheme } = useTheme();

  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS/SASS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="TailwindCSS" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="C#" />
      </div>
      <hr />
      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="skill1" />
        <SkillList src={checkMarkIcon} skill="skill2" />
        <SkillList src={checkMarkIcon} skill="skill3" />
        <SkillList src={checkMarkIcon} skill="skill4" />
        <SkillList src={checkMarkIcon} skill="skill5" />
      </div>
      <hr /> */}
    </section>
  );
}

export default Skills;
