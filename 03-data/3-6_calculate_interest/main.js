// 여기에 코드를 작성하세요
function interestCalculator(rate, payment, term) {
  const interest = +(payment * term * (term+1) / 2 * rate / 12).toFixed();
  console.log(interest);
}

// function interestCalculator(rate, payment, term) {
//   const interest = payment * term * (term+1) / 2 * rate / 12;
//   console.log(interest.toFixed(0));
// }

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);