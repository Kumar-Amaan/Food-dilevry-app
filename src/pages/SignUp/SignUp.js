import React from "react";
import { Button, Container } from "../../globalStyles";
import { Form, FormInput } from "../MyAccount/MyAccount.elements";
import "./signup.css";

const SignUp = () => {
  return (
    <>
      <Form>
        <FormInput
          name="username"
          type="username"
          placeholder="Enter Your Username"
          required
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Enter Your Email Id"
          required
        />
        <FormInput
          name="password"
          type="Password"
          placeholder="Enter Your Password"
          required
        />

        <Button big fontBig >
          Create Account
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
