const FooterTag = ({ tag, isActive = false, onClick }) => {
  return (
    <span
      onClick={() => onClick && onClick()}
      className={`footer-tag ${isActive && "light-footer-tag"}`}
    >
      {tag.label}
    </span>
  );
};

export default FooterTag;
