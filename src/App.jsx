import React from "react";
import styled from "styled-components";
import Calc from "./components/Calc";

const App = () => {
  return (
    <Container>
      <Calc />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
