// OMDb API: 2e431c92
// OMDb API link: http://www.omdbapi.com/?i=tt3896198&apikey=2e431c92
let sortValue = '';
let moviesData = '';
async function getMovies(searchRequest) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=2e431c92&s=${searchRequest}`);
    moviesData = await movies.json();
    // console.log(moviesData.Search);
    
    displayMovies();
}

function filterMovies(){
    if(sortValue== 'LOW_TO_HIGH') {
        moviesData.Search.sort((a, b) => (a.Year) - (b.Year));
    }
    else if(sortValue== 'HIGH_TO_LOW') {
        moviesData.Search.sort((a,b) => (b.Year) - (a.Year));
    }
    else {
        moviesData.Search.sort((a,b) => a.Title - b.Title);
    }
    return moviesData.Search;
}

function displayMovies() {
    const userListEL = document.querySelector(".movie__list");
    // next thing is to create the innerHTML for how we will display the movies.
    const filteredMovies = filterMovies();
    userListEL.innerHTML = filteredMovies.map((movie) => `
        <div class="movie">
            <figure>
                <img src=${movie.Poster} class="movie__poster">
            </figure>
            <div class="movie__title">${movie.Title}</div>
            <div> ${movie.Year}</div>
        </div>
    `).join('');
}

function getFilterMovies(event){
    console.log(`filterMovies value: ${event.target.value}`);
    sortValue = event.target.value;
    displayMovies();
    // filterMovies(event.target.value);
}   

function onSearchChange(event){
    // return console.log(event.target.value);
    return getMovies(event.target.value);
}

function getItemID() { return localStorage.getItem("id");}

function main() {
    getMovies(getItemID());
}

main();

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}