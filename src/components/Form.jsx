import React, { useRef } from "react";
import styled from "styled-components";
import Input from "./Input";

function Form({ capital, month }) {
  return (
    <FORM>
      <Input name="Capital" label="capital" reffer={capital} />
      <Input name="Month" label="capital" reffer={month} />
    </FORM>
  );
}
const FORM = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export default Form;
