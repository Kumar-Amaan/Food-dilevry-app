import React from "react";

const Form = () => {
  return (
    <>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label>Label 2</Label>
        <Input />
        <Message>This is the validation message</Message>
      </FormGroup>
    </>
  );
};

export default Form;
