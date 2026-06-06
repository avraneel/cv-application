import TextInput from "./TextInput";
import TextArea from "./TextArea";

export default function ExperienceEntry() {
  return (
    <>
      <section className="experience">
        <TextInput id="companyName" label="Company Name" inputType="text" />
        <TextInput id="position" label="Position Title" inputType="text" />
        <TextInput id="startDate" label="Date of Joining" inputType="date" />
        <TextInput id="endDate" label="Date of Leaving" inputType="date" />
        <TextInput
          id="current"
          label="Is this your current company?"
          inputType="checkbox"
        />
        <TextArea />
      </section>
    </>
  );
}
