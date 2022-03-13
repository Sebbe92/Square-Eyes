apiCall(allFilms).then(function (results) {
  listOfFilms = results;
  featuredFilms = getFeaturedFilms(listOfFilms);
  function insertFilmsHome(current) {
    latestContainer.innerHTML = "";
    console.log(listOfFilms, current);
    for (let i = 0; i < listOfFilms.length; i++) {
      latestContainer.innerHTML += `<div class="latest_item"><img src="${listOfFilms[current].images[0].src}" alt=""><div class="info_container"><h2>By : neon studios</h2> <p>price: 37 Nok</p></div><button class="watch_now"><h3>WATCH NOW</h3></button>
      </div>`;
      current++;
    }
  }
  insertFilmsHome(0);
  function getFeaturedFilms(listOfFilms) {
    let featuredFilms = [];
    listOfFilms.forEach((film) => {
      film.tags.forEach((tag) => {
        if (tag.name === "Featured") {
          featuredFilms.push(film);
        }
      });
    });
    return featuredFilms;
  }
  console.log(getFeaturedFilms(listOfFilms));

  setInterval(() => {
    changeFeaturedFilm();
  }, 5000);
  function changeFeaturedFilm() {
    featuredContentContainer.style.transform = "rotateY(90deg)";
    if (featuredCount >= featuredFilms.length) {
      featuredCount = 0;
    }
    setTimeout(() => {
      featuredContentContainer.innerHTML = `<a href="/html/filmSpesific.html?id=${featuredFilms[featuredCount].id}" id="featured_container"><img src="${featuredFilms[featuredCount].images[0].src}" alt=""> <div class="info_container"><h2>newmovie</h2><h3>h3h3trest</h3>
    <p>45 Nok</p></div><button class="watch_now"><h3>WATCH NOW</h3></button></a>`;
      featuredContentContainer.style.transform = "rotateY(0deg)";
      console.log(featuredCount, featuredFilms.length);
      featuredCount++;
    }, 300);
  }
  featuredNextBtn.addEventListener("click", function () {
    console.log("hello");
    changeFeaturedFilm();
  });

  featuredPrevBtn.addEventListener("click", function () {
    console.log("hello");
    changeFeaturedFilm();
  });
  latestNextBtn.addEventListener("click", function () {
    insertFilmsHome(6);
  });
});

//inserts six new films in the latest section of the home page
let numOfFilms = 6;
