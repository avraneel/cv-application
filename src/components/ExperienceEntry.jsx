import { useState } from "react";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "./Button";

export default function ExperienceEntry() {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    position: "",
    current: false,
    startDate: "",
    endDate: "",
  });

  const [formFlag, setFormFlag] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setFormFlag(false);
  }

  function handleEdit() {
    setFormFlag(true);
  }

  const formComponent = (
    <form method="post" onSubmit={handleSubmit}>
      <TextInput
        id="companyName"
        label="Company Name"
        inputType="text"
        value={experienceInfo}
        setState={setExperienceInfo}
      />
      <TextInput
        id="position"
        label="Position Title"
        inputType="text"
        value={experienceInfo}
        onChange={setExperienceInfo}
      />
      <TextInput
        id="current"
        label="Is this your current company?"
        inputType="checkbox"
        value={experienceInfo}
        setState={setExperienceInfo}
      />
      <TextInput
        id="startDate"
        label="Date of Joining"
        inputType="date"
        value={experienceInfo}
        setState={setExperienceInfo}
      />
      <TextInput
        id="endDate"
        label="Date of Leaving"
        inputType="date"
        current={experienceInfo}
        setState={setExperienceInfo}
      />
      <TextArea />
      <Button>Submit</Button>
    </form>
  );

  const displayComponent = (
    <section className="general-display">
      <div className="general-body">
        <div className="disp-item">
          <h3 className="item-name">Company</h3>
          <p className="item-value">{experienceInfo.companyName}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Position</h3>
          <p className="item-value">{experienceInfo.position}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Date of Joining</h3>
          <p className="item-value">{experienceInfo.startDate}</p>
        </div>
        {/* react does not support if statements inside jsx, 
            so ternary is used */}
        {experienceInfo.current == false ? (
          <div className="disp-item">
            <h3 className="item-name">Date of Leaving</h3>
            <p className="item-value">{experienceInfo.endDate}</p>
          </div>
        ) : null}
        <Button onClick={handleEdit} className="button">
          Edit
        </Button>
      </div>
    </section>
  );

  if (formFlag) {
    return <>{formComponent}</>;
  } else {
    return <>{displayComponent}</>;
  }
}
