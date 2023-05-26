import { MdDeleteOutline } from "react-icons/md";

const ListItem = ({
  taskDescription,
  handleDeleteTask,
  toggleCheck,
  badge,
  taskStatus,
}) => {
  return (
    <div className="listItem">
      <input type="checkbox" onChange={toggleCheck} className="check-icon" />
      <p className={taskStatus && "text-strikethrough"}>{taskDescription}</p>
      <span onClick={handleDeleteTask}>
        <MdDeleteOutline color="crimson" size={"24px"} />
      </span>
      {badge}
    </div>
  );
};

export default ListItem;
