import React from "react";
import { Popover } from "@varld/popover";
import "./style.css";
// import { Form, FormInput } from "../../components/Footer/Footer.elements";
// import { Button } from "../../globalStyles";
import { Form, FormInput } from "./MyAccount.elements";
import { Link } from "react-router-dom";

import "./Data";

const MyAccount = () => {
  return (
    <>
      <Form>
        <FormInput
          name="username"
          type="username"
          placeholder="Enter Your Old Username"
          required
        />
        <FormInput
          name="username"
          type="username"
          placeholder="Enter Your New Username"
          required
        />
        <FormInput
          name="password"
          type="Password"
          placeholder="Enter Your Old Password"
          required
        />
        <FormInput
          name="password"
          type="Password"
          placeholder="Enter Your New Password"
          required
        />

        <Popover
          popover={({ change, close }) => {
            return (
              <div className="popover">
                <p> Data will be {change ? "not change" : " change"}.</p>
                <button onClick={close}>
                  <Link to="/home"></Link>
                  Close❎
                </button>
              </div>
            );
          }}
        >
          <button>Modify</button>
        </Popover>
      </Form>
    </>
  );
};

export default MyAccount;
