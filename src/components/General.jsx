import { useState } from "react";

import TextInput from "./TextInput";
import Submit from "./Submit";

export default function General() {
  // Setting state
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const formComponent = (
    <section className="general-form">
      <h2>General Information</h2>
      <form action="" method="post">
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
        <Submit />
      </form>
    </section>
  );

  const displayComponent = (
    <section className="general-display">
      <h2>General Information</h2>
      <div className="general-body">
        <div className="disp-item">
          <h4>Name</h4>
          <p>{generalInfo.name}</p>
        </div>
        <div className="disp-item">
          <h4>E-mail</h4>
          <p>{generalInfo.email}</p>
        </div>
        <div className="disp-item">
          <h4>Phone</h4>
          <p>{generalInfo.phone}</p>
        </div>
        <div className="disp-item">
          <h4>Date of Birth</h4>
          <p>{generalInfo.dob}</p>
        </div>
      </div>
    </section>
  );

  return (
    <section className="general">
      <h2>General Information</h2>
      <form action="" method="post">
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
        <Submit />
      </form>
    </section>
  );
}
