export default function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick} className={children.toLowerCase()}>
        {children}
      </button>
    </>
  );
}
