function SkillList(props) {
  return (
    <span>
      <img src={props.src} alt="Check mark icon" />
      <p>{props.skill}</p>
    </span>
  );
}

export default SkillList;
