import MovieCard from "./movieCard"
import { getPopularMovies } from "../services/api"
import { useEffect, useState } from "react"

function MovieList({ movies: searchResults, loading, error }) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            setIsLoading(false); // Don't load popular movies when searching
            return;
        }

        const loadPopularMovies = async () => {
            try {
                const popular = await getPopularMovies();
                setPopularMovies(popular);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadPopularMovies();
    }, [searchResults]);

    const moviesToRender = searchResults && searchResults.length > 0 ? searchResults : popularMovies;

    return (
        <div className="flex flex-wrap justify-center gap-4 pt-10 pb-20">
            {loading || isLoading ? (
                <p className="text-gray-500 text-sm">Loading movies...</p>
            ) : error ? (
                <p className="text-red-500 text-sm">{error}</p>
            ) : moviesToRender.length === 0 ? (
                <p className="text-gray-500 text-sm">No movies found.</p>
            ) : (
                moviesToRender.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
            )}
        </div>
    );
}

export default MovieList;
