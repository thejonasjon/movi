import { Info, Play } from "lucide-react"
import { MainBtn } from "./utils"
import moviePoster from  '../assets/images/movie-poster.jpg'
import { useEffect, useState } from "react"
import { getUpcomingMovies } from "../services/api";
import { Link } from "react-router-dom";

function Hero(){
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUpcomingMovies = async () => {
            try {
                const upcomingMovies = await getUpcomingMovies();
                setUpcomingMovies(upcomingMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movie details...");
            } finally {
                setLoading(false);
            }
        }
        loadUpcomingMovies()
    }, [])

    return(
        <section>
            { upcomingMovies.slice(0, 1).map((upcomingMovie) => (
                <div key={upcomingMovie.id} className="h-[84vh] text-white flex flex-col justify-end items-start px-10 py-10 md:pb-20"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(10, 10, 46, 0.59) 68%, rgba(0, 0, 0, 0.74) 100%), url('https://image.tmdb.org/t/p/w780${upcomingMovie.backdrop_path}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="text md:w-3/8">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{upcomingMovie.title}</h2>
                        <p className="text-sm md:text-base text-gray-300">{upcomingMovie.overview}</p>
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-8">
                        <Link>
                            <MainBtn className="text-sm bg-blue-500 text-black hover:bg-blue-600 transition-all ease-in-out" BtnIcon={<Play strokeWidth="1.5" size="16" />} btnText="Watch Trailer" />
                        </Link>
                        <Link to={`/details/${upcomingMovie.id}`}>
                            <MainBtn className="text-sm bg-gray-100 text-black hover:bg-gray-300 transition-all ease-in-out" BtnIcon={<Info strokeWidth="1.5" size="16" />} btnText="More Info" />
                        </Link>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Hero