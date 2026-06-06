import Add from "./Add";
import Education from "./Education";

export default function Section({ name }) {
  let form = null;

  if (name === "Education") {
    form = (
      <>
        <Education />
        <Add />
      </>
    );
  }

  return (
    <section className={name.toLowerCase()}>
      <h2>{name}</h2>
      <Add />
    </section>
  );
}
