import React from "react";
import styled from "styled-components";

const Input = ({ name, label, reffer }) => {
  return (
    <Container>
      <label htmlFor={label}>{name}</label>
      <INPUT type="number" ref={reffer} />
    </Container>
  );
};
const Container = styled.div``;
const INPUT = styled.input`
  margin: 1rem;
  padding: 0.7rem;
`;
export default Input;
