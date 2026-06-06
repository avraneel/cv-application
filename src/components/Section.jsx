import Add from "./Add";

export default function Section({ name }) {
  return (
    <section className={name.toLowerCase()}>
      <h2>{name}</h2>
      <Add />
    </section>
  );
}
