import TextInput from "./TextInput";

export default function EducationEntry() {
  return (
    <section className="education">
      <TextInput id="name" label="Name of Institution" inputType="text" />
      <TextInput id="date" label="Date of Joining" inputType="date" />
    </section>
  );
}
