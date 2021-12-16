studio.name.addEventListener("input", validateName);
studio.email.addEventListener("input", validateEmail);
studio.pass.addEventListener("input", validatePass);
studio.repeatPass.addEventListener("input", validateRepeat);
studio.submitBtn.addEventListener("click", function (e) {
  e.preventDefault;

  console.log(studio.name, studio.email, studio.pass);
});

viewer.name.addEventListener("input", validateName);
viewer.email.addEventListener("input", validateEmail);
viewer.pass.addEventListener("input", validatePass);
viewer.repeatPass.addEventListener("input", validateRepeat);
viewer.submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(viewer.name.value, viewer.email.value, viewer.pass.value);
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
