export default function Dropdown({ id }) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>

      <select name="name" id={id}>
        <option value="masters">Masters/Post-Graduation</option>
        <option value="undergrad">Graduation</option>
        <option value="high school">HighSchool</option>
      </select>
    </div>
  );
}
