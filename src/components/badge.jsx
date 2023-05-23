import { MdCheckCircleOutline } from "react-icons/md";

const Badge = ({ category, tagType, showIcon = false }) => {
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
  return (
    <div className={`category-tag button ${tagType}`}>
      {category} {showIcon && <MdCheckCircleOutline />}
    </div>
  );
};

export default Badge;
