apiCall(allFilms).then(function (results) {
  listOfFilms = results;
  featuredFilm(listOfFilms);
});
