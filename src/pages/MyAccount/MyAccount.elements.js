import styled from "styled-components";

export const Form = styled.form`
  padding: 35px;
  margin: 35px;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: linear-gradient(#0F2027,#203A43,#2C5364);

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 2px solid black;

  &::placeholder {
    color: #080303;

    @media screen and (max-width: 820px) {
      width: 100%;
      margin: 0 0 16px 0;
    }
  }
`;
