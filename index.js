// OMDb API: 2e431c92
// OMDb API link: http://www.omdbapi.com/?i=tt3896198&apikey=2e431c92

async function displayMovies(searchRequest) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=2e431c92&s=${searchRequest}`);
    const moviesData = await movies.json();
    console.log(moviesData);
    const userListEL = document.querySelector(".movie__list");
    // userListEL.innerHTML = moviesData.map((user) =>  printUserHTML(user)).join('');
    // next thing is to create the innerHTML for how we will display the movies.
}

function onSearchChange(event){
    // return console.log(event.target.value);
    return displayMovies(event.target.value);
}

