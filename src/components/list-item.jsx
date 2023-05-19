import { MdCheckCircle } from "react-icons/md";
import Button from "./button";

const ListItem = ({ task, taskStatus, buttonType }) => {
  return (
    <div className="listItem">
      <MdCheckCircle size={"30px"} color="#4CAF50" />
      <p>{task}</p>
      <Button buttonType={buttonType}>{taskStatus}</Button>
    </div>
  );
};

export default ListItem;
