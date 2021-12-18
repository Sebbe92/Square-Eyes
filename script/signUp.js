studio.name.addEventListener("input", validateName);
studio.email.addEventListener("input", validateEmail);
studio.pass.addEventListener("input", validatePass);
studio.repeatPass.addEventListener("input", validateRepeat);
//when form is valid submit btn is enabled and console logs the content when clicked as well as running userMessage to display a success message to the user.
studio.submitBtn.addEventListener("click", function (e) {
  e.preventDefault;
  clearForm();
  console.log(studio.name.value, studio.email.value, studio.pass.value);
  userMessage(
    `Welcome to SquareEyes ${studio.name.value}`,
    "It's time to upload your first video"
  );
});

viewer.name.addEventListener("input", validateName);
viewer.email.addEventListener("input", validateEmail);
viewer.pass.addEventListener("input", validatePass);
viewer.repeatPass.addEventListener("input", validateRepeat);
//when form is valid submit btn is enabled and console logs the content when clicked as well as running userMessage to display a success message to the user.
viewer.submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(studio.name.value, studio.email.value, studio.pass.value);
  clearForm();
  userMessage(
    `Welcome to SquareEyes ${viewer.name.value}`,
    `You are ready to find a film and enjoy`
  );
});

studioswitch.addEventListener("click", function () {
  if (!studioBtnPressed) {
    studioBtnPressed = true;
    viewerBtnPressed = false;
    switchWidget();
  }
});
viewerSwitch.addEventListener("click", function () {
  if (!viewerBtnPressed) {
    viewerBtnPressed = true;
    studioBtnPressed = false;
    switchWidget();
  }
});
