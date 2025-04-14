import { Info, Play, X } from "lucide-react";
import { MainBtn } from "./utils";
import { useEffect, useState } from "react";
import { getUpcomingMovies, getMovieTrailer } from "../services/api";
import { Link } from "react-router-dom";

function Hero() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const loadUpcomingMovies = async () => {
      try {
        const data = await getUpcomingMovies();
        setUpcomingMovies(data);
      } catch (err) {
        console.error("Failed to load movie details...");
      } finally {
        setLoading(false);
      }
    };
    loadUpcomingMovies();
  }, []);

  const handlePlayTrailer = async (movieId) => {
    try {
      const trailers = await getMovieTrailer(movieId);
      if (trailers.length > 0) {
        setVideoKey(trailers[0].key); // Use first trailer
        setShowVideo(true);
      } else {
        alert("No trailer available for this movie.");
      }
    } catch (err) {
      console.error("Failed to load trailer:", err);
    }
  };

  const closeTrailer = () => {
    setShowVideo(false);
    setVideoKey(null);
  };

  return (
    <section className="relative">
      {upcomingMovies.slice(0, 1).map((movie) => (
        <div
          key={movie.id}
          className="h-[84vh] text-white flex flex-col justify-end items-start px-10 py-10 md:pb-20"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(10, 10, 46, 0.59) 68%, rgba(0, 0, 0, 0.74) 100%), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text md:w-3/8">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{movie.title}</h2>
            <p className="text-sm md:text-base text-gray-300">{movie.overview}</p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-8">
            <button onClick={() => handlePlayTrailer(movie.id)}>
              <MainBtn
                className="text-sm bg-blue-500 text-black hover:bg-blue-600 transition-all ease-in-out"
                BtnIcon={<Play strokeWidth="1.5" size="16" />}
                btnText="Watch Trailer"
              />
            </button>
            <Link to={`/details/${movie.id}`}>
              <MainBtn
                className="text-sm bg-gray-100 text-black hover:bg-gray-300 transition-all ease-in-out"
                BtnIcon={<Info strokeWidth="1.5" size="16" />}
                btnText="More Info"
              />
            </Link>
          </div>
        </div>
      ))}

      {/* Trailer Modal */}
      {showVideo && videoKey && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl">
            <iframe
              width="100%"
              height="100%"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1`}
              title="Movie Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeTrailer}
              className="absolute top-4 right-4 bg-white p-2 rounded-full text-black"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
