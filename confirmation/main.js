let cardClicked = false;

function select(el) {
  el.classList.toggle("toggle");

  if (el.id === "box6" && cardClicked === true) {
    location.replace("../card/card.html");
  } else if (el.id === "box6" && cardClicked === false) {
    alert("You have not selected the credit card!");
    el.classList.toggle("toggle");
  } else {
    alert("You have not selected the bus!");
    el.classList.toggle("toggle");
  }
}

function paymentSelect(element) {
  element.classList.toggle("highlightBox");
  cardClicked = true;
  if (element.id !== "credit-card") {
    alert("You have not selected the credit card!");
    element.classList.toggle("highlightBox");
  }
}
// function nextPage() {
//   var correct = document.querySelector("#box6");
//   console.log(correct);
//   if (correct.classList.contains(correect)) {

//   }
// }
