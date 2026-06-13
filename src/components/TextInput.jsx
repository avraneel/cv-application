import "../styles/input.css";

/**
 * @desc Component comprising a label and input entry together
 */
export default function TextInput({
  id,
  label,
  inputType,
  value,
  setState,
  required = true,
}) {
  // dont render end date if currently working/studying
  if (id === "endDate" && value.current === true) {
    return null;
  }

  function updateState(e) {
    if (inputType === "checkbox") {
      setState({ ...value, [id]: e.target.checked });
    } else {
      setState({ ...value, [id]: e.target.value });
    }
  }

  if (inputType === "checkbox") {
    return (
      <div className={`${id} checkboxGroup`}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={value[id]}
          onChange={updateState}
          required={required}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  } else {
    return (
      <div className={`${id} inputGroup`}>
        <label htmlFor={id}>{label}</label>
        <input
          type={inputType}
          name={id}
          id={id}
          value={value[id]} // [] notation for computed property
          onChange={updateState}
          autoComplete="off"
          required={required}
        />
      </div>
    );
  }
}
