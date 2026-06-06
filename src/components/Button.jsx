import "../styles/button.css";

export default function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick} className={`${children.toLowerCase()} button`}>
        {children}
      </button>
    </>
  );
}
