//Add movies to DOM

function addMoviesToDom(movies) {
  const getUl = document.getElementById("images");
  getUl.innerHTML = "";
  
  movies.map ((films) => {
    const img = document.createElement("img");
    img.src = films.poster;
    img.classList.add("movie-poster")
  
    const a = document.createElement("a");
    a.href = "https://www.imdb.com/title/" + films.imdbID;
    a.target = "_blank";
  
    getUl.appendChild(a).appendChild(img); 
  });
  }
  
addMoviesToDom(movies);

//Select radiobuttons and add eventlistener

function addEventListener () {
  const getBtn = document.getElementsByName ('filter');
  getBtn.forEach((button) => {
  button.addEventListener('change', () => handleOnChangeEvent(event));
});
};

//Filter movies

function nieuwsteFilms(){
const latestMoviesFilter = movies.filter((latestMovies) => {
  return latestMovies.year >= 2014;
});
addMoviesToDom(latestMoviesFilter);
};

function filterMovies(wordInMovie) {
const movieName = movies.filter((movie) => {
  return movie.title.includes (wordInMovie);
});
addMoviesToDom(movieName);
}

//Handle on change event

function handleOnChangeEvent (event) {
  const target = event.target.value;
   switch (target) {
   case "latestmovie-filter":
   nieuwsteFilms();
   break;
   case "avenger-filter":
   filterMovies ("Avenger");
   break;
   case "XMen-filter":
   filterMovies ("X-Men");
   break;
   case "princess-filter":
   filterMovies ("Princess");
   break;
   case "batman-filter":
   filterMovies ("Batman");
   break;
   default: addMoviesToDom(movies);
   }}

addEventListener();
 