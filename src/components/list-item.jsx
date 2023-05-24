import { MdDeleteOutline } from "react-icons/md";

const ListItem = ({
  taskDescription,
  handleDeleteTask,
  toggleCheck,
  badge,
}) => {
  return (
    <div className="listItem">
      <input type="checkbox" onChange={toggleCheck} className="check-icon" />
      <p>{taskDescription}</p>
      <span onClick={handleDeleteTask}>
        <MdDeleteOutline color="gray" size={"24px"} />
      </span>
      {badge}
    </div>
  );
};

export default ListItem;
