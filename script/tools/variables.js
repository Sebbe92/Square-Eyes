//LINKS
const allFilms =
  "https://portabooth.digital/square-eyes/wp-json/wc/store/products";
const featuredFilmsUrl =
  "https://portabooth.digital/square-eyes/wp-json/wc/store/products/tags";

//featured film home page
let numOfFeatured = 0;

//browse
let listOfFilms = [];
let filteredFilms = [];

//form validation | Sign-up
let password = "";
const nameMinLen = 2;
let studioPassword = "";
let studioBtnPressed = false;
let viewerBtnPressed = true;
let emailTimeoutCheck = false;
let passTimeoutCheck = false;
let nameTimeoutCheck = false;
let repeatTimeoutCheck = false;
//
