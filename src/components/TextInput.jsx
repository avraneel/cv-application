export default function TextInput({ id, name, inputType }) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type={inputType} name={id} id={id} />
    </>
  );
}
