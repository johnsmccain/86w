const calc = (capital, month) => {
  let days = 1;
  let i;
  let profit;
  days = month * 30;
  for (i = 0; i < days; i++) {
    profit = capital * (3 / 100);
    capital += profit;
  }
  return capital;
};

export default calc;
