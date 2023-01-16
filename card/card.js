let cardNumber = document.querySelector("#card-number");
cardNumber.addEventListener("keyup", () => {
  console.log(cardNumber.value);
});

let cardName = document.querySelector("#card-name");
cardName.addEventListener("keyup", () => {
  console.log(cardName.value);
});

let expDateMonth = document.querySelector("#expiration-date-month");
expDateMonth.addEventListener("keyup", () => {
  console.log(expDateMonth.value);
});

let expDateYear = document.querySelector("#expiration-date-year");
expDateYear.addEventListener("keyup", () => {
  console.log(expDateYear.value);
});

let CVV = document.querySelector("#cvv");
cvv.addEventListener("keyup", () => {
  console.log(cvv.value);
});

console.log("working");

// RESPONSE GIVEN COMPLETION OF FORM.
function respond() {
  let responseArray = [];

  let response = document.querySelector("#response");
  response.innerText = "";

  if (cardNumber.value !== "4520422678281145") {
    responseArray.push("Please add a valid card number");
    console.log(cardNumber.value);
  } else if (cardName.value.toLowerCase() !== "n e learner") {
    responseArray.push("Please add the name as it appears on the card");
  } else if (
    expDateMonth.value !== "07" &&
    expDateMonth.value.toLowerCase() !== "july"
  ) {
    responseArray.push("Please enter correct month");
  } else if (expDateYear.value !== "24" && expDateYear.value !== "2024") {
    responseArray.push("Please enter correct year");
  } else if (CVV.value !== "846") {
    responseArray.push("Please enter correct CVV");
  } else {
    location.replace("../complete/complete.html");
  }
  response.innerText = responseArray.join(`\n`);
}
