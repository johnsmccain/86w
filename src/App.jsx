import styled from "styled-components";

import { useRef, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  let [capital, setCapital] = useState();
  let [month, setMonth] = useState();
  let [datas, setDatas] = useState([]);

  let days = 1;
  let i;
  let profit;
  let arr = [];
  let data = new Object();
  let total;
  const Calc = (capital, month) => {
    days = month * 30;
    for (i = 0; i < days; i++) {
      data = {};
      profit = capital * (3 / 100);

      data.profit = profit;
      data.capital = capital;
      data.total = capital + profit;
      capital += profit;
      arr.push(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Calc(capital, month);
    setDatas(arr);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Top>
        <Navbar>86w Calculator</Navbar>
        <Screen>
          <h1>{datas[3] && Math.floor(datas[datas.length - 1]?.total)}</h1>
          <Button onClick={() => setIsVisible(!isVisible)}>details</Button>
        </Screen>
        <Detail>
          {isVisible &&
            datas?.map((d, index) =>
              index % 30 === 0 ? (
                index / 30 === 0 ? (
                  <>
                    <h1 key={index}>First month</h1>
                    <ul key={index}>
                      <li>Capital: {Math.floor(d.capital)}</li>
                      <li>Profit: {Math.floor(d.profit)}</li>
                      <li>Total: {Math.floor(d.total)}</li>
                    </ul>
                  </>
                ) : (
                  <h1 key={index}>
                    End of {index / 30 == 0 ? "" : index / 30} month
                  </h1>
                )
              ) : (
                <ul key={index}>
                  <li>Capital: {Math.floor(d.capital)}</li>
                  <li>Profit: {Math.floor(d.profit)}</li>
                  <li>Total: {Math.floor(d.total)}</li>
                </ul>
              )
            )}
        </Detail>
        <Button onClick={() => setIsVisible(false)}>close</Button>
      </Top>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputContainer>
            <label htmlFor="capital">Capital</label>
            <input
              type="number"
              id="capital"
              onChange={(e) => setCapital(Math.floor(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="capital">Month</label>
            <input
              type="number"
              id="capital"
              onChange={(e) => setMonth(Math.floor(e.target.value))}
            />
          </InputContainer>
          <ButtonBd type="submit">Calc</ButtonBd>
        </Form>
      </Container>
    </div>
  );
}
const Detail = styled.div`
  background-color: #ecece4;
  width: 90%;
  border-radius: 9px;
  padding: 10px;
  max-height: 50vh;
  overflow-y: scroll;
`;
const Top = styled.div`
  background-color: #cac4c4;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Screen = styled.div`
  text-align: right;
  margin: 20px;
  padding-top: 3rem;
  border: 3px solid #868584;
  width: 95%;
  border-radius: 9px;
  h1 {
    padding-right: 15px;
  }
`;
const InputContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;
const Button = styled.button`
  padding: 7px 9px;
  color: teal;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ButtonBd = styled.button`
  padding: 7px 20px;
  color: white;
  background: blue;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 9px;
  :hover {
    background: #686262;
  }

  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
const Navbar = styled.nav`
  color: green;
  font-size: 3rem;
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  border-left: 5px solid blue;
  padding: 1rem;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    margin-bottom: 9px;
    color: green;
  }
  input {
    padding: 12px;
  }
`;
export default App;
