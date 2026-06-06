import EditButton from "./EditButton";
import Submit from "./Submit";
import TextInput from "./TextInput";

export default function General() {
  return (
    <section className="general">
      <h2>General Information</h2>
      <TextInput id="name" label="Name" inputType="text" />
      <TextInput id="email" label="Email ID" inputType="email" />
      <TextInput id="phone" label="Phone Number" inputType="tel" />
      <EditButton />
      <Submit />
    </section>
  );
}
