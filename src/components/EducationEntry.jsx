import TextInput from "./TextInput";

export default function EducationEntry() {
  return (
    <section className="education">
      <TextInput id="name" name="Name of Institution" inputType="text" />
      <TextInput id="name" name="Date of Joining" inputType="date" />
    </section>
  );
}
