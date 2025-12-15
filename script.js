const API_KEY = '331fd55e';

// DOM elements
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const movieDetailsDiv = document.getElementById('movieDetails');

// Click Search Button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchMovies(searchTerm);
    } else {
        alert("Please enter a movie name!");
    }
});

// API: Search Movies
async function searchMovies(query) {
    resultsDiv.innerHTML = "<p>Loading...</p>";
    movieDetailsDiv.innerHTML = "";

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            resultsDiv.innerHTML = `<p>No movies found. Try another search.</p>`;
        }

    } catch (error) {
        resultsDiv.innerHTML = "<p>Something went wrong.</p>";
        console.error(error);
    }
}

// Display Movie Cards
function displayMovies(movies) {
    resultsDiv.innerHTML = "";

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
        `;

        movieItem.addEventListener('click', () => fetchMovieDetails(movie.imdbID));

        resultsDiv.appendChild(movieItem);
    });
}

// Fetch movie details by IMDb ID
async function fetchMovieDetails(id) {
    movieDetailsDiv.innerHTML = "<p>Loading details...</p>";

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const movie = await response.json();

        displayMovieDetails(movie);
    } catch (error) {
        movieDetailsDiv.innerHTML = "<p>Error loading details.</p>";
        console.error(error);
    }
}

// Display Movie Details
function displayMovieDetails(movie) {
    movieDetailsDiv.innerHTML = `
        <h2>${movie.Title}</h2>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
    `;
}
