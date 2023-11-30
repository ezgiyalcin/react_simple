import "./customBtn.css";
const Button = ({ customBtn, btnColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-btn"
      style={{ background: btnColor }}
    >
      {customBtn}
    </button>
  );
};

export default Button;
