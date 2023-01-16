//DOM QUERIES

let emailAddress = document.querySelector("#email-address");
emailAddress.addEventListener("keyup", () => {
  console.log(emailAddress.value);
});

let password = document.querySelector("#password");
password.addEventListener("keyup", () => {
  console.log(password.value);
});

let confirmPw = document.querySelector("#confirm");
confirmPw.addEventListener("keyup", () => {
  console.log(confirmPw.value);
});

let firstName = document.querySelector("#firstName");
firstName.addEventListener("keyup", () => {
  console.log(firstName.value);
});

let surname = document.querySelector("#surname");
surname.addEventListener("keyup", () => {
  console.log(surname.value);
});

//REGEX CHECK PASS🗺

// RESPONSE GIVEN COMPLETION OF FORM.
function respond() {
  let responseArray = [];

  let response = document.querySelector("#response");
  response.innerText = "";

  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let passwordCheck =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let passwordResult = passwordCheck.test(password.value);
    console.log(passwordResult);

    if (!inputText.match(mailformat)) {
      alert("Please enter a valid email address!");
      document.form1.text1.focus();
      return true;
    } else {
      if (emailAddress.value.length === 0) {
        responseArray.push("Please add an email address");
      } else if (password.value.length === 0) {
        responseArray.push("Please add a password");
      } else if (confirmPw.value.length === 0) {
        responseArray.push("Please confirm your password");
      } else if (password.value !== confirmPw.value) {
        responseArray.push("Please ensure that your passwords are the same");
      } else if (!passwordResult) {
        responseArray.push("Please ensure you enter a strong password");
      } else if (firstName.value.length === 0) {
        responseArray.push("Please add your first name");
      } else if (surname.value.length === 0) {
        responseArray.push("Please add your surname");
      } else {
        location.replace("../confirmation/confirmation.html");
      }
    }
  }

  ValidateEmail(emailAddress.value);

  response.innerText = responseArray.join(`\n`);
}
