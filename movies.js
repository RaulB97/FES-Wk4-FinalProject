// OMDb API: 2e431c92
// OMDb API link: http://www.omdbapi.com/?i=tt3896198&apikey=2e431c92

async function displayMovies(searchRequest) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=2e431c92&s=${searchRequest}`);
    const moviesData = await movies.json();
    // console.log(moviesData.Search);
    const userListEL = document.querySelector(".movie__list");
    // userListEL.innerHTML = moviesData.map((user) =>  printUserHTML(user)).join('');
    // next thing is to create the innerHTML for how we will display the movies.
    userListEL.innerHTML = moviesData.Search.map((movie) => `
        <div class="movie">
            <figure class="movie__poster--wrapper">
                <img src=${movie.Poster} class="movie__poster">
            </figure>
            <div class="movie__title">${movie.Title}</div>
        </div>
    `).join('');
}

function onSearchChange(event){
    // return console.log(event.target.value);
    return displayMovies(event.target.value);
}

function getItemID() { return localStorage.getItem("id");}

function main() {
    displayMovies(getItemID());
}

main();