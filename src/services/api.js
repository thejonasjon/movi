
const API_KEY = "10429eac61dca95a970cb7623b232869";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};

export const getMovieTrailer = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results?.filter(video => video.type === 'Trailer' && video.site === 'YouTube') || [];
};

export const getSimilarMovies = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&page=1`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (q) => {
    const response = await fetch(`${BASE_URL}/search/movie?include_adult=false&page=1?api_key=${API_KEY}&query=${encodeURIComponent(q)}`)
    const data = await response.json()
    return data.results
};

export const getUpcomingMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}

export const getGenres = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data.genres
}


