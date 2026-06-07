import { useState } from "react";

import TextInput from "./TextInput";
import Submit from "./Submit";

export default function General() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

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
