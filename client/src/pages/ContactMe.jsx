import { useState } from "react";

function ContactMe(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //CHANGE TO JUST EMAIL ME CONTENT ON FORM SUBMIT
  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     const mutationResponse = await addUser({
  //       variables: {
  //         email: formState.email,
  //         password: formState.password,
  //         firstName: formState.firstName,
  //         lastName: formState.lastName,
  //       },
  //     });
  //     const token = mutationResponse.data.addUser.token;
  //     Auth.login(token);
  //   };

  return (
    <div className="container my-1">
      <h2>Contact Me</h2>
      {/* <form /*onSubmit={handleFormSubmit}>  */}
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
