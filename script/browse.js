//!!had to put it here and not in the querySelector file because some of the selectors throw errors when not on the correct page, will fix in the future!!
const output = document.querySelector(".output");

apiCall(allFilms).then(function (results) {
  listOfFilms = results;
  filterGenre(listOfFilms);
});
sortByNameBtn.addEventListener("click", function () {
  sortFilmsByName(filteredFilms);
});

sortByPriceBtn.addEventListener("click", function () {
  sortFilmsByPrice(filteredFilms);
});

genreSelector.addEventListener("change", function () {
  filterGenre(listOfFilms);
});

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchFilm();
});
