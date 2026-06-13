import { useState } from "react";

import TextInput from "./TextInput";
import Button from "./Button";

import "../styles/displayGeneral.css";

/**
 * @desc Stores form information in one state, and flag to render what kind
 * of display in another state
 */
export default function General() {
  // Setting state
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [formFlag, setFormFlag] = useState(true);

  const formComponent = (
    <section className="general-form">
      <h2>General Information</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <TextInput
          id="name"
          label="Name"
          inputType="text"
          value={generalInfo}
          setState={setGeneralInfo}
        />
        <TextInput
          id="email"
          label="Email ID"
          inputType="email"
          value={generalInfo}
          setState={setGeneralInfo}
        />
        <TextInput
          id="phone"
          label="Phone Number"
          inputType="tel"
          value={generalInfo}
          setState={setGeneralInfo}
        />
        <TextInput
          id="dob"
          label="Date of Birth"
          inputType="date"
          value={generalInfo}
          setState={setGeneralInfo}
        />
        <Button>Submit</Button>
      </form>
    </section>
  );

  const displayComponent = (
    <section className="general-display">
      <h2>General Information</h2>
      <div className="general-body">
        <div className="disp-item">
          <h3 className="item-name">Name</h3>
          <p className="item-value">{generalInfo.name}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">E-mail</h3>
          <p className="item-value">{generalInfo.email}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Phone</h3>
          <p className="item-value">{generalInfo.phone}</p>
        </div>
        <div className="disp-item">
          <h3 className="item-name">Date of Birth</h3>
          <p className="item-value">{generalInfo.dob}</p>
        </div>
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
    // Prevent the browser from reloading the page
    e.preventDefault();
    setFormFlag(false);
  }

  if (formFlag) {
    return <>{formComponent}</>;
  } else {
    return <>{displayComponent}</>;
  }
}
