import Add from "./Add";
import Education from "./Education";
import EducationEntry from "./EducationEntry";
import ExperienceEntry from "./ExperienceEntry";

export default function Section({ name }) {
  let form = [
    {
      id: 0,
      form: <EducationEntry />,
    },
    {
      id: 1,
      form: <ExperienceEntry />,
    },
  ];

  return (
    <section className={name.toLowerCase()}>
      <h2>{name}</h2>
      {formItem}
      <Submit />
    </section>
  );
}
