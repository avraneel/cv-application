import { useState } from "react";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function ExperienceEntry() {
  const [current, setCurrent] = useState(false);

  function handleSubmit() {}

  return (
    <form method="post" onSubmit={handleSubmit}>
      <TextInput id="companyName" label="Company Name" inputType="text" />
      <TextInput id="position" label="Position Title" inputType="text" />
      <Checkbox
        name="current"
        label="Is this your current company?"
        current={current}
        setCurrent={setCurrent}
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
