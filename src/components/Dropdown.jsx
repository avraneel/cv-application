import "../styles/input.css";

export default function Dropdown({ id, label }) {
  const list = [
    {
      id: crypto.randomUUID(),
      value: "phd",
      name: "Doctorate (PhD)",
    },
    {
      id: crypto.randomUUID(),
      value: "masters",
      name: "Post Graduation",
    },
    {
      id: crypto.randomUUID(),
      value: "bachelors",
      name: "Graduation",
    },
    {
      id: crypto.randomUUID(),
      value: "hs",
      name: "High School",
    },
  ];

  const options = list.map((item) => (
    <option key={item.id} value={item.value}>
      {item.name}
    </option>
  ));

  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        {options}
      </select>
    </div>
  );
}
