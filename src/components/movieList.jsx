import { ChevronDown, Search } from "lucide-react"
import MovieCard from "./movieCard"
import { getPopularMovies, searchMovies } from "../services/api"
import { useEffect, useState } from "react"

function MovieList(){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...");
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []);

    return(
        <div className="flex flex-wrap justify-center gap-4 pt-10 pb-20">
            {movies.map((movie) => {
               return <MovieCard movie={movie} key={movie.id} />
            })}
        </div>
    )
}

export default MovieList