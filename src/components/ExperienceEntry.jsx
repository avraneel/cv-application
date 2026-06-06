import { useState } from "react";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import Submit from "./Submit";

export default function ExperienceEntry() {
  const [current, setCurrent] = useState(false);

  return (
    <form method="post">
      <TextInput id="companyName" label="Company Name" inputType="text" />
      <TextInput id="position" label="Position Title" inputType="text" />
      <TextInput id="startDate" label="Date of Joining" inputType="date" />
      <Checkbox
        name="current"
        label="Is this your current company?"
        current={current}
        setCurrent={setCurrent}
      />
      <TextInput
        id="endDate"
        label="Date of Leaving"
        inputType="date"
        current={current}
      />
      <TextArea />
      <Submit />
    </form>
  );
}
