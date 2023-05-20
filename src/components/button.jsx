const Button = ({ buttonType, children, handleClickEvent }) => {
  return (
    <button onClick={handleClickEvent} className={buttonType}>
      {children}
    </button>
  );
};

export default Button;
