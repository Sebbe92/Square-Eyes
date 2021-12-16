/* adds a background to the inputfields on input */
function textBackground() {
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.style.backgroundColor = "white";
    });
  });
}
textBackground();
/*  */
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
//
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
    console.log("viewer");
  } else {
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

//match password
function validateRepeat() {
  if (this.value === password) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "black";
    this.isValid = false;
  }
  validateForm();
}

//validates lenth of string from minimum length to recomended length
function validateLength(minLen, input) {
  const inputLen = input.length;
  if (inputLen >= minLen) {
    return true;
  } else {
    return false;
  }
}
function validatePass() {
  const regEx =
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!?=£$€¤%&])[A-Za-z0-9@!?=£$€¤%&]{8,}/;
  const patternMatches = regEx.test(this.value);
  if (patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    password = this.value;
    validateForm();
  } else {
    this.style.outline = "none";
    this.style.borderColor = "red";
    this.isValid = false;
  }
}
function validateName() {
  const input = this.value;
  const regEx = /[^0-9]/;
  const patternMatches = regEx.test(this.value);
  if (validateLength(nameMinLen, input) && patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    studio.nameError.innerHTML = "";
    this.isValid = true;
    validateForm();
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "red";
    studio.nameError.innerHTML = "Required";
    this.isValid = false;
  }
}
function recomendedLen() {
  console.log("hello");
  const input = this.value;
  const inputLen = input.length;
  if (inputLen >= recomendedLenOfPassword) {
    console.log("hello");
    this.style.outline = "none";
    this.style.borderColor = "red";
  }
}
function validateEmail() {
  //email format [A-Z,a-z,0-9,_]at(@)[A-Z,a-z,0-9,_] dot(.) [A-Za-z0-9_]<-(x2)
  const regEx = /\w+@\w+\.+\w{2}/;
  const patternMatches = regEx.test(this.value);
  if (patternMatches) {
    this.style.outline = "none";
    this.style.borderColor = "green";
    this.isValid = true;
    validateForm();
  } else {
    this.style.outline = "auto";
    this.style.borderColor = "black";
    this.isValid = false;
  }
}
