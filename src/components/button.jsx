const Button = ({ buttonType, children }) => {
  return <button className={buttonType}>{children}</button>;
};

export default Button;
