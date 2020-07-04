import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";

const SignUP = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    signUpStart({ email, password, displayName });
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }


  return (
    <SignUpContainer>
      <SignUpTitle>I don't have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
}


const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUP);
