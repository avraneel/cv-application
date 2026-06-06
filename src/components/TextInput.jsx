/**
 * @desc Component comprising a label and input entry together
 */
export default function TextInput({ id, label, inputType }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} name={id} id={id} />
    </>
  );
}
