import React from "react";
import { useFormik } from "formik";

export default function Signup() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          //   onChange={(e) => setFirstName(e.target.value)}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          //   onChange={(e) => setLastName(e.target.value)}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          //   onChange={(e) => setEmail(e.target.value)}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
