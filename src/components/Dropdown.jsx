import "../styles/input.css";

export default function Dropdown({ id, label, value, setState }) {
  const list = [
    {
      id: crypto.randomUUID(),
      name: "Doctorate (PhD)",
    },
    {
      id: crypto.randomUUID(),
      name: "Post Graduation",
    },
    {
      id: crypto.randomUUID(),
      name: "Graduation",
    },
    {
      id: crypto.randomUUID(),
      name: "High School",
    },
  ];

  const options = list.map((item) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ));

  function handleChange(e) {
    setState({ ...value, [id]: e.target.value });
  }

  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value={value[id]} onChange={handleChange}>
        {options}
      </select>
    </div>
  );
}
