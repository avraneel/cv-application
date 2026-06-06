import "../styles/input.css";

/**
 * @desc Component comprising a label and input entry together
 */
export default function TextInput({ id, label, inputType, current = false }) {
  // if (id === "endDate" && current === true) {
  //   return null;
  // }
  return (
    <div className={`${id} inputGroup`}>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} name={id} id={id} disabled={current} />
    </div>
  );
}
