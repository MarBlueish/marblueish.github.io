function updateMoviesOnPage(movies) {
    const movieContainers = document.querySelectorAll('.movie');

    movies.forEach((movie, index) => {
        const container = movieContainers[index]; // seleciona nos moviecontainers criados acima e indexa

        const titleElement = container.querySelector('h1'); // troca o titulo
        const releaseDateElement = container.querySelector('h2'); // seleciona a release date
        const imageElement = container.querySelector('img'); // troca o filme

        titleElement.textContent = movie.title;
        releaseDateElement.textContent = "Release Date: " + movie.release_date;

        imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        imageElement.alt = movie.title;
    });
}

async function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjliZThlMWQxM2E0ODllN2VlZDJhZWRiN2Y3M2FhNCIsInN1YiI6IjY2MGVlODQ1ZTE4ZTNmMDE3ZGE0NGM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VvOvFTka2N-dfsMwtIAstcUQLpvmAFVR9OpVp51HGc'
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const data = await response.json();
        const movies = data.results;

        updateMoviesOnPage(movies);
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', () => {
    fetchMovies();
});