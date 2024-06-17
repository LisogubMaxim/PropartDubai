import "./button.scss";

export default function Button({ children, handler, className, disabled }) {
  return (
    <button
      onClick={handler}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
