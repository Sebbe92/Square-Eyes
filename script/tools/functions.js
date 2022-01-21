/* adds a background to the inputfields on input */
function textBackground() {
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.style.backgroundColor = "white";
    });
  });
}

//get querystring
function getID() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = parseInt(params.get("id"));
  return id;
}

//api call to wordpress rest api
async function apiCall(url, params = "") {
  try {
    const response = await fetch(`${url}${params}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
apiCall(allFilms).then(function (results) {
  listOfFilms = results;
});
//browse films
function insertFilms(films) {
  output.innerHTML = "";
  try {
    for (i = 0; i < films.length; i++) {
      const film = films[i];
      output.innerHTML += `<a href="/html/filmSpesific.html?id=${film.id}"class="film_container">
      <img class="film__img" src="${film.images[0].src}" alt="${film.images[0].alt}">
      <div class="padding_10"><h2 class="film__title">${film.name}</h2>
      <p class="film__price margin_10">${film.prices.price} ${film.prices.currency_code}</p>
      <p class="film__description">${film.short_description}</p></div>
    </a>`;
    }
  } catch (error) {
    console.log(error);
  }
}
function insertFilm(listOfFilms) {
  const id = getID();
  const film = listOfFilms.filter(function (item) {
    console.log(item.id, id);
    return item.id === id;
  })[0];
  console.log(film);
  filmSpesificContainer.innerHTML = `<img class="film__img" src="${film.images[0].src}" alt="${film.images[0].alt}">
  <div class="padding_10"><h2 class="film__title">${film.name}</h2>
  <p class="film__price margin_10">${film.prices.price} ${film.prices.currency_code}</p>
  <p class="film__description">${film.short_description}</p></div>`;
}
//sort
console.log(apiCall(spesificFilm, id));
function sortFilmsByName(listOfFilms) {
  listOfFilms.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  insertFilms(listOfFilms);
}
function sortFilmsByPrice(listOfFilms) {
  const sortedList = listOfFilms.sort(function (a, b) {
    return a.prices.price - b.prices.price;
  });
  insertFilms(sortedList);
}
function checkGenre(film) {
  for (let i = 0; i < film.categories.length; i++) {
    if (film.categories[i].name === genreSelector.value) {
      return true;
    }
  }
}
function filterGenre(listOfFilms) {
  if (genreSelector.value === "genre") {
    filteredFilms = listOfFilms;
    insertFilms(filteredFilms);
    return;
  } else {
    filteredFilms = listOfFilms.filter(checkGenre);
    insertFilms(filteredFilms);
  }
}
//featured film display
function checkTag(film) {
  console.log(film);
  if (film.tags[0]) {
    if (film.tags[0].name === "Featured") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function featuredFilm(listOfFilms) {
  console.log(listOfFilms);
  const featuredFilms = listOfFilms.filter(checkTag);
  const numOfFeatured = featuredFilms.length;
  const currentlyFeatured = Math.floor(Math.random() * numOfFeatured);
  console.log(currentlyFeatured, featuredFilms);
  const featuredFilm = featuredFilms[currentlyFeatured];
  console.log(featuredFilm);
  featuredContentContainer.style.backgroundImage = `url(${featuredFilm.images[0].src})`;
  featuredTitle.innerHTML = `${featuredFilm.name}`;
  featuredDescription.innerHTML = `${featuredFilm.short_description}`;
}

//

function clearForm() {
  allInputs.forEach((input) => {
    input.innerHTML = "";
  });
}
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

function validateRepeat() {
  errorContainer = this.error;
  try {
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
        }, 1000);
        passTimeoutCheck = true;
      }
    }
  } catch (error) {
    console.log(error);
  }
  if (this.value === "") {
    errorContainer.innerHTML = "";
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

function validatePass() {
  try {
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
  } catch (error) {}
  password = this.value;
  if (password === studio.repeatPass.value) {
    console.log("match");
    studio.repeatPass.style.outline = "none";
    studio.repeatPass.isValid = true;
    studio.repeatPass.style.borderColor = "green";
  } else if (password === viewer.repeatPass.value) {
    viewer.repeatPass.style.outline = "none";
    viewer.repeatPass.isValid = true;
    viewer.repeatPass.style.borderColor = "green";
  } else {
    viewer.repeatPass.style.outline = "none";
    viewer.repeatPass.isValid = false;
    viewer.repeatPass.style.borderColor = "red";
    studio.repeatPass.style.outline = "none";
    studio.repeatPass.isValid = false;
    studio.repeatPass.style.borderColor = "red";
  }
  validateForm();
}
// validates name uses validateLength to check the length and a regex to check that the name does not start with a number

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

//insert videos
/* function insertVideo() {
  for (let i = 0; i < 10; i++) {
    output.innerHTML += `<a href="/html/movie_id_movie.html" class="video_element">
  <video src="/videos/video.mp4" type="video/mp4" id=${i} class = "video" muted >sorry looks like something went wrong</video> <div class="vid_overlay"><h2>feel the magic</h2>
    <div class="container">
      <h3>neon film studio</h3>
  </div>
  </div>
</a>`;
  }
  let i = 0;
  const videos = document.querySelectorAll(".video");
  videos.forEach((video) => {
    video.addEventListener("mouseenter", function () {
      videos.forEach((video) => {
        video.pause();
      });
      video.play();
    });
    i++;
  });
} */
