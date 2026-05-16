import EditButton from "./EditButton";
import Submit from "./Submit";
import TextInput from "./TextInput";

export default function General() {
  return (
    <section>
      <h2>General Information</h2>
      <TextInput id="name" name="Name" inputType="text" />
      <TextInput id="email" name="Email ID" inputType="email" />
      <TextInput id="phone" name="Phone Number" inputType="tel" />
      <EditButton />
      <Submit />
    </section>
  );
}
