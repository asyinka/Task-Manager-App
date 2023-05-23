import { MdDeleteOutline } from "react-icons/md";
import Button from "./button";

const ListItem = ({
  task,
  taskStatus,
  buttonType,
  handleDeleteTask,
  isChecked,
  toggleCheck,
}) => {
  return (
    <div className="listItem">
      <input type="checkbox" onChange={toggleCheck} className="check-icon" />
      <p>{task}</p>
      <span onClick={handleDeleteTask}>
        <MdDeleteOutline color="gray" size={"24px"} />
      </span>
      <Button buttonType={buttonType}>{taskStatus}</Button>
    </div>
  );
};

export default ListItem;
