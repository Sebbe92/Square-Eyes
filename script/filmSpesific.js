apiCall(allFilms).then(function (results) {
  listOfFilms = results;
  insertFilm(listOfFilms);
});
