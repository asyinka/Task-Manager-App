const Badge = ({ category, tagType }) => {
  switch (category) {
    case "Urgent":
      tagType = "button--accent";
      break;
    case "Important":
      tagType = "button--secondary";
      break;
    case "Later":
      tagType = "button--lb";
      break;
    case "To Study":
      tagType = "button--tertiary";
      break;
    case "Completed":
      tagType = "button--primary";
      break;
    default:
      tagType = "button";
      break;
  }
  {
    /* the button className used in this div is simply to copy the styles used for the button to follow the DRY rule */
  }
  return <span className={`category-tag button ${tagType}`}>{category}</span>;
};

export default Badge;
