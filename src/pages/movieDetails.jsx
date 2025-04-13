import NavBar from "../../src/components/header/navbar";
// import '../src/css/style.css'
import { ChevronDown, Search } from "lucide-react"
import SimilarMovieCard from "../../src/components/similarMovieCard";

import Footer from "../components/footer";

import CardDetail from "../../src/components/cardDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieTrailer, getSimilarMovies } from "../services/api";


function MovieDetails() {

    const [isFavourite, setIsFavourite] = useState(false);
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [movieTrailer, setMovieTrailer] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [similarMovies, setSimilarMovies] = useState([]);

    console.log(similarMovies)

    useEffect(() => {
        const loadMovieDetails = async () => {
            try {
                const movieDetails = await getMovieDetails(id);
                setMovie(movieDetails);
            } catch (err) {
                console.log(err);
                setError("Failed to load movie details...");
            }finally{
                setLoading(false)
            }
        }

        loadMovieDetails()
    }, [id])

    useEffect(() => {
        setLoading(true);
        if (!id) return;

        const loadTrailer = async () => {
            try {
                const trailerData = await getMovieTrailer(id);
                setMovieTrailer(trailerData || [])
            } catch (err) {
                console.log(err);
                setError("Failed to load movie trailer...");
            } finally{
                setLoading(false)
            }
        }
        loadTrailer()
    }, [id])

    useEffect(() => {
        const loadSimilarMovies = async () => {
            try {
                const similarMoviesData = await getSimilarMovies(696506);
                setSimilarMovies(similarMoviesData);
            } catch (error) {
                console.log(err);
                setError("Failed to load movie trailer...");
            } finally{
                setLoading(false)
            }
        }

        loadSimilarMovies()
    }, [id])

  return (
    <>
      <NavBar />

      {movie? <CardDetail movie={movie} trailers={movieTrailer}  /> : "Loading" }

      <section className="py-16 px-10 bg-black text-white">
        <div className="mb-10">
          <h4 className="text-2xl font-bold">Similar movies</h4>
        </div>

        <div className="flex gap-4 flex-wrap lg:flex-nowrap">

        { similarMovies && similarMovies.length > 0 ? (
            similarMovies.slice(0, 6).map((similarMovie) => (
                <SimilarMovieCard movie={similarMovie} key={similarMovie.id} />
                ))
            ) : (
                <p>No similar movies</p>
            )
        }

          {/* <SimilarMovieCard />
          <SimilarMovieCard />
          <SimilarMovieCard />
          <SimilarMovieCard />
          <SimilarMovieCard />
          <SimilarMovieCard /> */}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default MovieDetails
