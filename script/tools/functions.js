/* adds a background to the inputfields on input */
function textBackground() {
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.style.backgroundColor = "white";
    });
  });
}
textBackground();
//
/* switches forms from studio to<or>from viewer also changes backgrounds to match form  */
function switchWidget() {
  if (studioBtnPressed) {
    viewerForm.style.display = "none";
    studioForm.style.display = "block";
    formContainer.style.backgroundImage =
      "url(/img/pexels-koolshooters-7346304.jpg)";
  } else {
    formContainer.style.backgroundImage =
      "url(/img/pexels-rakicevic-nenad-1274260.jpg)";
    viewerForm.style.display = "block";
    studioForm.style.display = "none";
  }
}
//displays a message to the user added the event listener here for re-useability
function userMessage(
  messageHead = "error",
  messageBody = "something migth have gone wrong try again."
) {
  userAlert.style.display = "block";
  userAlertHeader.innerHTML = `${messageHead}`;
  userAlertBody.innerHTML = `${messageBody}`;
}
userAlertClose.addEventListener("click", function () {
  userAlert.style.display = "none";
});
//

//error display
/* function inputError() {
  const errorContainer = this.error;
  console.log(errorContainer);
  if (!this.isValid) {
    nameTimeout = setTimeout(() => {
      console.log(this);
      this.error.innerHTML = "invalid name";
    }, 1000);
  } else {
    this.error.innerHTML = "";
    clearTimeout(nameTimeout);
  } 

   console.log(location);
  if (location.innerHTML === "") {
    setTimeout(() => {
      location.innerHTML = `${message}`;
    }, 500);
  } else {
    window.clearTimeout;
  } 
}*/

//validates sign-up forms both viewer and studio
function validateForm() {
  if (
    studio.name.isValid &&
    studio.email.isValid &&
    studio.pass.isValid &&
    studio.repeatPass.isValid
  ) {
    studio.submitBtn.disabled = false;
    studioForm.isValid = true;
    studio.submitBtn.style.borderColor = "green";
  } else if (
    viewer.name.isValid &&
    viewer.email.isValid &&
    viewer.pass.isValid &&
    viewer.repeatPass.isValid
  ) {
    viewer.submitBtn.disabled = false;
    viewerForm.isValid = true;
    viewer.submitBtn.style.borderColor = "green";
  } else {
    viewer.submitBtn.disabled = true;
    studio.submitBtn.disabled = true;
    studio.submitBtn.style.borderColor = "black";
    viewer.submitBtn.style.borderColor = "black";
  }
  /* 
if (this.dataset.account === "viewer") {
  viewer.passError.innerHTML =
    "password error explain (?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!?=£$€¤%&])[A-Za-z0-9@!?=£$€¤%&]{8,}";
} else {
  studio.passError.innerHTML =
    "password error explain (?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!?=£$€¤%&])[A-Za-z0-9@!?=£$€¤%&]{8,}";
} */
}

//check if password match
let repeatTimeoutCheck = false;
function validateRepeat() {
  errorContainer = this.error;
  if (this.value === password) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    clearTimeout(passTimeout);
    passTimeoutCheck = false;
    errorContainer.innerHTML = "";
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "black";
    this.isValid = false;
    if (!passTimeoutCheck) {
      passTimeout = setTimeout(() => {
        errorContainer.innerHTML = "Password do not match";
      }, 2000);
      passTimeoutCheck = true;
    } else {
      clearTimeout(passTimeout);
      passTimeout = setTimeout(() => {
        errorContainer.innerHTML = "Password do not match";
      }, 2000);
      passTimeoutCheck = true;
    }
  }
  validateForm();
}

//validates length of input(input) with a minimum length(minLen)
function validateLength(minLen, input) {
  const inputLen = input.length;
  if (inputLen >= minLen) {
    return true;
  } else {
    return false;
  }
}
//validates password format atleast 8 in length and contains atleast one capital letter, one lower case letter, a number and a special character (@!?=£$€¤%&)
let passTimeoutCheck = false;
function validatePass() {
  const errorContainer = this.error;
  const regEx =
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!?=£$€¤%&])[A-Za-z0-9@!?=£$€¤%&]{8,}/;
  const patternMatches = regEx.test(this.value);
  if (patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    clearTimeout(passTimeout);
    passTimeoutCheck = false;
    errorContainer.innerHTML = "";
  } else {
    this.style.outline = "none";
    this.style.borderColor = "red";
    this.isValid = false;
    if (!passTimeoutCheck) {
      passTimeout = setTimeout(() => {
        errorContainer.innerHTML =
          "Password must be atleast eigth(8) characters long and contain atleast one capitol letter, one lower case letter, one number and one special character(@!?=£$€¤%&)";
      }, 2000);
      passTimeoutCheck = true;
    } else {
      clearTimeout(passTimeout);
      passTimeout = setTimeout(() => {
        errorContainer.innerHTML =
          "Password must be atleast eigth(8) characters long and contain atleast one capitol letter, one lower case letter, one number and one special character(@!?=£$€¤%&)";
      }, 2000);
      passTimeoutCheck = true;
    }
  }
  password = this.value;
  validateForm();
}
// validates name uses validateLength to check the length and a regex to check that the name does not start with a number
let nameTimeoutCheck = false;
function validateName() {
  const errorContainer = this.error;
  const input = this.value;
  const regEx = /[^0-9]/;
  const patternMatches = regEx.test(this.value);
  if (validateLength(nameMinLen, input) && patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    try {
      clearTimeout(nameTimeout);
      errorContainer.innerHTML = "";
      nameTimeoutCheck = false;
    } catch (error) {
      console.log("hotfix");
    }
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "red";
    this.isValid = false;
    if (!nameTimeoutCheck) {
      nameTimeout = setTimeout(() => {
        errorContainer.innerHTML =
          "Name must contain atleast two characters and can not start with a number";
      }, 2000);
      passTimeoutCheck = true;
    } else {
      clearTimeout(nameTimeout);
      nameTimeout = setTimeout(() => {
        errorContainer.innerHTML =
          "Name must contain atleast two characters and can not start with a number";
      }, 2000);
      passTimeoutCheck = true;
    }
  }
  validateForm();
}

//validates Email format -->[A-Z,a-z,0-9,_]at(@)[A-Z,a-z,0-9,_] dot(.) [A-Za-z0-9_]<-(x2)
let emailTimeoutCheck = false;
function validateEmail() {
  const errorContainer = this.error;
  const regEx = /\w+@\w+\.+\w{2}/;
  const patternMatches = regEx.test(this.value);
  if (patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    try {
      clearTimeout(emailTimeout);
      errorContainer.innerHTML = "";
    } catch (error) {
      console.log("hotfix");
    }
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "red";
    this.isValid = false;
    if (!emailTimeoutCheck) {
      emailTimeout = setTimeout(() => {
        errorContainer.innerHTML = "Invalid Email, format like this x(@)x(.)xx";
      }, 2000);
      emailTimeoutCheck = true;
    } else {
      clearTimeout(emailTimeout);
      emailTimeout = setTimeout(() => {
        errorContainer.innerHTML = "Invalid Email, format like this x(@)x(.)xx";
      }, 2000);
      emailTimeoutCheck = true;
    }
  }
  validateForm();
}

//not in use may be used later
/* function recomendedLen() {


  console.log("hello");
  const input = this.value;
  const inputLen = input.length;
  if (inputLen >= recomendedLenOfPassword) {
    console.log("hello");
    this.style.outline = "none";
    this.style.borderColor = "red";
  }
} */
