import TextInput from "./TextInput";
import Submit from "./Submit";

export default function General() {
  const generalView = (
    <div className="generalView">
      <div className="nameItem">
        <h3>Name</h3>
        <p>{name}</p>
      </div>
    </div>
  );

  return (
    <section className="general">
      <h2>General Information</h2>
      <form action="" method="post">
        <TextInput id="name" label="Name" inputType="text" />
        <TextInput id="email" label="Email ID" inputType="email" />
        <TextInput id="phone" label="Phone Number" inputType="tel" />
        <TextInput id="dob" label="Date of Birth" inputType="date" />
        <Submit />
      </form>
    </section>
  );
}
