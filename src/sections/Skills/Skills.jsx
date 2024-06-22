import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

// light and dark icons
import checkMarkIcon from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="HTML" />
        <SkillList src={checkMarkIconDark} skill="CSS" />
        <SkillList src={checkMarkIconDark} skill="JavaScript" />
        <SkillList src={checkMarkIconDark} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="React" />
        <SkillList src={checkMarkIconDark} skill="Tailwind CSS" />
        <SkillList src={checkMarkIconDark} skill="C++" />
        <SkillList src={checkMarkIconDark} skill="C#" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="skill1" />
        <SkillList src={checkMarkIconDark} skill="skill2" />
        <SkillList src={checkMarkIconDark} skill="skill3" />
        <SkillList src={checkMarkIconDark} skill="skill4" />
        <SkillList src={checkMarkIconDark} skill="skill5" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
