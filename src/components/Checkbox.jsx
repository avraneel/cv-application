export default function Checkbox({ name, label, current, setCurrent }) {
  function handleClick() {
    setCurrent(!current);
  }

  return (
    <div className={`${name} checkboxGroup`}>
      <input type="checkbox" name={name} id={name} onClick={handleClick} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
