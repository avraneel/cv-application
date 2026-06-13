export default function TextArea({ id, label, value, setState }) {
  function handleChange(e) {
    setState({ ...value, [id]: e.target.value });
  }

  return (
    <div className="textArea inputGroup">
      <label htmlFor="responsibilities">{label}</label>
      <textarea
        id={id}
        name={id}
        rows={10}
        value={value[id]}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
