//ALL
const title = document.querySelector("title");

//Home page
const featuredContentContainer = document.querySelector("#featured");
const featuredTitle = document.querySelector("#featured__title");
const featuredDescription = document.querySelector(
  "#featured__short_description"
);
const postsContainer = document.querySelector("#posts_container");

// browse--sort
const sortByNameBtn = document.querySelector("#a-z");
const sortByPriceBtn = document.querySelector("#price");
const genreSelector = document.querySelector("#genre");
//film spesific
const filmSpesificContainer = document.querySelector(
  "#film_spesific_container"
);
const rentBtn = document.querySelector(".rent_now");
const similarContainer = document.querySelector("#similar_container");

//studio form
const studio = {};
studio.name = document.querySelector("#studio_name");
studio.name.error = document.querySelector("#studio_name_error");
studio.email = document.querySelector("#studio_email");
studio.email.error = document.querySelector("#studio_email_error");
studio.pass = document.querySelector("#studio_password");
studio.pass.error = document.querySelector("#studio_password_error");
studio.repeatPass = document.querySelector("#studio_repeat");
studio.repeatPass.error = document.querySelector("#studio_repeat_error");
studio.submitBtn = document.querySelector("#studio_submit_btn");
//viewer form
const viewer = {};
viewer.name = document.querySelector("#viewer_name");
viewer.name.error = document.querySelector("#viewer_name_error");
viewer.email = document.querySelector("#viewer_email");
viewer.email.error = document.querySelector("#viewer_email_error");
viewer.pass = document.querySelector("#viewer_password");
viewer.pass.error = document.querySelector("#viewer_password_error");
viewer.repeatPass = document.querySelector("#viewer_repeat");
viewer.repeatPass.error = document.querySelector("#viewer_repeat_error");
viewer.submitBtn = document.querySelector("#viewer_submit_btn");
//all form
const submitBtn = document.querySelectorAll(".temp_btn");
const studioswitch = document.querySelector("#studio_switch");
const viewerSwitch = document.querySelector("#viewer_switch");
const allInputs = document.querySelectorAll("main input");
const studioForm = document.querySelector("#studio_form");
const viewerForm = document.querySelector("#viewer_form");
const formContainer = document.querySelector(".sign_up");
//user alert pop-up
const userAlert = document.querySelector(".user_alert");
const userAlertHeader = document.querySelector(".user_alert h2");
const userAlertBody = document.querySelector(".user_alert p");
const userAlertClose = document.querySelector("#close_btn");
