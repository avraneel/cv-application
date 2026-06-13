import { useState } from "react";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "./Button";

export default function ExperienceEntry() {
  const [experienceInfo, setExperienceInfo] = useState("");

  function handleSubmit() {}

  return (
    <form method="post" onSubmit={handleSubmit}>
      <TextInput id="companyName" label="Company Name" inputType="text" />
      <TextInput id="position" label="Position Title" inputType="text" />
      <TextInput
        id="current"
        label="Is this your current company?"
        inputType="checkbox"
        value={experienceInfo}
        setState={setExperienceInfo}
      />
      <TextInput id="startDate" label="Date of Joining" inputType="date" />
      <TextInput
        id="endDate"
        label="Date of Leaving"
        inputType="date"
        current={current}
      />
      <TextArea />
      <Button>Submit</Button>
    </form>
  );
}
