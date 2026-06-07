import "../styles/input.css";

/**
 * @desc Component comprising a label and input entry together
 */
export default function TextInput({
  id,
  label,
  inputType,
  current = false,
  value,
  setState,
}) {
  console.log(value);
  if (id === "endDate" && current === true) {
    return null;
  }
  return (
    <div className={`${id} inputGroup`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        name={id}
        id={id}
        value={value.id}
        onChange={(e) => setState({ ...value, [id]: e.target.value })}
        autoComplete="off"
      />
    </div>
  );
}
