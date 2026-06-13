import { useState } from "react";

import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import Button from "./Button";

export default function EducationEntry() {
  const [educationInfo, setEducationInfo] = useState({
    education: "Graduation",
    specialization: "",
    name: "",
    current: false,
    startDate: "",
    endDate: "",
  });

  const [formFlag, setFormFlag] = useState(true);

  const formComponent = (
    <form method="post" onSubmit={handleSubmit}>
      <Dropdown
        id="education"
        label="Education *"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <TextInput
        id="specialization"
        label="Specialization *"
        inputType="text"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <TextInput
        id="name"
        label="Name of Institution *"
        inputType="text"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <TextInput
        id="current"
        label="Are you currently studying here?"
        inputType="checkbox"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <TextInput
        id="startDate"
        label="Date of Joining *"
        inputType="date"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <TextInput
        id="endDate"
        label="Date of Leaving *"
        inputType="date"
        value={educationInfo}
        setState={setEducationInfo}
      />
      <Button>Submit</Button>
    </form>
  );

  const displayComponent = (
    <section className="general-display">
      <div className="general-body">
        <div className="disp-item">
          <h3 className="item-name">Education</h3>
          <p className="item-value">{educationInfo.education}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Specialization</h3>
          <p className="item-value">{educationInfo.specialization}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Name</h3>
          <p className="item-value">{educationInfo.name}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Date of Joining</h3>
          <p className="item-value">{educationInfo.startDate}</p>
        </div>
        {/* react does not support if statements inside jsx, 
        so ternary is used */}
        {educationInfo.current == false ? (
          <div className="disp-item">
            <h3 className="item-name">Date of Leaving</h3>
            <p className="item-value">{educationInfo.endDate}</p>
          </div>
        ) : null}
        <Button onClick={handleEdit} className="button">
          Edit
        </Button>
      </div>
    </section>
  );

  function handleEdit() {
    setFormFlag(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormFlag(false);
  }

  if (formFlag) {
    return <>{formComponent}</>;
  } else {
    return <>{displayComponent}</>;
  }
}
