let endpoint = 'https://api.themoviedb.org/3/movie/';
let endpointimage = 'https://image.tmdb.org/t/p/w500/';
let apikey = '19c37852b70f89f925fa63e89f426925';
const moviesContainer = document.querySelector('#movies');
const moviesTitle = document.querySelector('#title');
const createMoviesTemplate = (movie) =>`
  <div class="col">
    <div class="card d-block mx-auto mt-4 mb-4" style="width: 25rem;">
    <img class="card-img-top rounded" src=" ${endpointimage + movie.poster_path}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Rated : ${movie.vote_average}⭐️</h6>
        <p class="card-text">${movie.overview}</p>
      </div>
    </div>
  </div>
`;
nowPlayingMovies();

  function nowPlayingMovies(){
    $.ajax({
        type: "GET",
        url: endpoint + "now_playing" + "?api_key=" + apikey,
        contentType: "application/json",
        dataType: "json",
        success: function(res){
            movies = res.results;
            moviesTitle.innerHTML = 'Now Playing Movies';
            let moviesContainerAnother = '';
              movies.forEach((movie) => {
              moviesContainerAnother += createMoviesTemplate(movie);
            });       
            if(moviesContainer.innerHTML !== moviesContainerAnother){
              moviesContainer.innerHTML = moviesContainerAnother
            }
        if (res.length === 0) {
            moviesContainer.innerHTML = `
            <div class="no__movies">
                <p>tidak ada movies</p>
            </div>`;
            }
        },
        error: function(res){
           alert(res);
        }
    })
  }

  function popularMovies(){
    $.ajax({
        type: "GET",
        url: endpoint + "popular" + "?api_key=" + apikey,
        contentType: "application/json",
        dataType: "json",
        success: function(res){
            movies = res.results;
            moviesTitle.innerHTML = 'Popular Movies';
            let moviesContainerAnother = '';
              movies.forEach((movie) => {
              moviesContainerAnother += createMoviesTemplate(movie);
            });       
            if(moviesContainer.innerHTML !== moviesContainerAnother){
              moviesContainer.innerHTML = moviesContainerAnother
            }
        if (res.length === 0) {
            moviesContainer.innerHTML = `
            <div class="no__movies">
                <p>tidak ada movies</p>
            </div>`;
            }
        },
        error: function(res){
           alert(res);
        }
    })
  }

  function topRatedMovies(){
    $.ajax({
        type: "GET",
        url: endpoint + "top_rated" + "?api_key=" + apikey,
        contentType: "application/json",
        dataType: "json",
        success: function(res){
            movies = res.results;
            moviesTitle.innerHTML = 'Top Rated Movies'
            let moviesContainerAnother = '';
              movies.forEach((movie) => {
              moviesContainerAnother += createMoviesTemplate(movie);
            });       
            if(moviesContainer.innerHTML !== moviesContainerAnother){
              moviesContainer.innerHTML = moviesContainerAnother
            }
        if (res.length === 0) {
            moviesContainer.innerHTML = `
            <div class="no__movies">
                <p>tidak ada movies</p>
            </div>`;
            }
        },
        error: function(res){
           alert(res);
        }
    })
  }

  function upcomingMovies(){
    $.ajax({
        type: "GET",
        url: endpoint + "upcoming" + "?api_key=" + apikey,
        contentType: "application/json",
        dataType: "json",
        success: function(res){
            movies = res.results;
            moviesTitle.innerHTML = 'Upcoming Movies';
            let moviesContainerAnother = '';
              movies.forEach((movie) => {
              moviesContainerAnother += createMoviesTemplate(movie);
            });       
            if(moviesContainer.innerHTML !== moviesContainerAnother){
              moviesContainer.innerHTML = moviesContainerAnother
            }
        if (res.length === 0) {
            moviesContainer.innerHTML = `
            <div class="no__movies">
                <p>tidak ada movies</p>
            </div>`;
            }
        },
        error: function(res){
           alert(res);
        }
    })
  }