import { MdCheck, MdDeleteOutline } from "react-icons/md";
import Button from "./button";

const ListItem = ({ task, taskStatus, buttonType, handleDeleteTask }) => {
  return (
    <div className="listItem">
      <MdCheck size={"30px"} className="check-icon" />
      <p>{task}</p>
      <span onClick={handleDeleteTask}>
        <MdDeleteOutline />
      </span>
      <Button buttonType={buttonType}>{taskStatus}</Button>
    </div>
  );
};

export default ListItem;
