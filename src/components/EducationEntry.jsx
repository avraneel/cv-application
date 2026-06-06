import { useState } from "react";

import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import Submit from "./Submit";

export default function EducationEntry() {
  const [current, setCurrent] = useState(false);

  return (
    <form method="post">
      <Dropdown id="education" label="Education" />
      <TextInput id="specialization" label="Specialization" inputType="text" />
      <TextInput id="name" label="Name of Institution" inputType="text" />
      <TextInput id="startDate" label="Date of Joining" inputType="date" />
      <Checkbox
        name="current"
        label="Are you currently studying here?"
        current={current}
        setCurrent={setCurrent}
      />
      <TextInput
        id="endDate"
        label="Date of Leaving"
        inputType="date"
        current={current}
      />
      <Submit />
    </form>
  );
}
