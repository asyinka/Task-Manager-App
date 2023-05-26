const FooterTag = ({
  displayActiveTask,
  displayCompletedTasks,
  fetchAllTasks,
  children,
  footerFontColor = false,
}) => {
  let onTagClick = "";

  switch (children) {
    case "All":
      onTagClick = fetchAllTasks;
      break;
    case "Completed":
      onTagClick = displayCompletedTasks;
      break;
    case "Active":
      onTagClick = displayActiveTask;
      break;
    default:
      break;
  }
  return (
    <span
      onClick={onTagClick}
      className={`footer-tag ${footerFontColor && "light-footer-tag"}`}
    >
      {children}
    </span>
  );
};

export default FooterTag;
