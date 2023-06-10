import { MdDeleteOutline } from "react-icons/md";
import Badge from "./badge";

const ListItem = ({ task, onDeleteTask, toggleCheck, badge }) => {
  return (
    <div className="listItem">
      <input
        type="checkbox"
        onChange={() => toggleCheck(task)}
        checked={task.isCompleted}
        className="check-icon"
      />
      <p className={task.isCompleted ? "text-strikethrough" : ""}>
        {task.description}
      </p>
      <span onClick={() => onDeleteTask(task)}>
        <MdDeleteOutline color="crimson" size={"24px"} />
      </span>
      <Badge category={task.category} tagType={task.category} />
    </div>
  );
};

export default ListItem;
