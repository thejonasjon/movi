import { Heart, Star } from "lucide-react";
import { useState } from "react";
import MovieImagePlaceholder from "../assets/images/poster-placeholder.png"; // Import your placeholder image

function CardDetail({movie, trailers}) {
    const [isFavourite, setIsFavourite] = useState(false);

    const hr = Math.floor(movie.runtime / 60);
    const min = movie.runtime % 60;
    const vote_ = movie.vote_average.toFixed(1)

    const trailer = trailers.find(t => t.site === "YouTube" && t.type === "Trailer");
    // const trailer = Array.isArray(trailers)
    // ? trailers.find((video) => video.site === "YouTube" && video.type === "Trailer")
    // : null;

    console.log(trailer)



    return (
        <section>
        <div
            className="h-[20vh] md:h-[70vh] text-white flex flex-col justify-end items-start px-10 py-10 pb-40"
            style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(10, 10, 46, 0.7) 68%, rgba(0, 0, 0, 0.74) 100%), url(${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : MovieImagePlaceholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }}
        ></div>

        <div className="text-white flex flex-col justify-end items-start bg-black px-10 py-10 pb-40">
            <div className="flex flex-col md:flex-row gap-10">
            <div className="hidden md:block w-2/8 h-120 bg-gray-200 rounded-2xl">
                <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : MovieImagePlaceholder}
                alt={movie.title}
                className="w-full h-full object-cover rounded-sm"
                />
            </div>

            <div className="md:w-6/8">
                <div className="flex gap-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{movie.title}</h2>

                    <div>
                        <button
                        className="bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-black"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsFavourite(!isFavourite);
                        }}
                        >
                        <Heart
                            className={`stroke-white text-gray-800 ${isFavourite ? "stroke-0 text-yellow-400 fill-yellow-500" : ""}`}
                            size={18}
                            strokeWidth={1.5}
                        />
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">{movie.release_date}</span>
                            <span className="text-sm text-gray-400">{hr}hr {min}min</span>
                        </div>

                        <div className="rating flex items-center gap-1 border-[1px] border-yellow-500 rounded-xl py-0.5 px-2">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-[10px] font-normal">{vote_}</span>
                        </div>
                    </div>
                </div>

                {movie.genres.length > 0 ? (
                    <div className="flex items-center gap-3 mb-4">
                        { movie.genres.map((genre) => (
                            <span key={genre.id} className="text-[10px] font-medium rounded-full bg-gray-700 py-0.5 px-2">{genre.name}</span>
                        ))
                        }
                    </div>
                ) : (
                    ""
                )

                }

                <div className="mb-4">
                <h4 className="text-base font-bold mb-2">Overview</h4>
                <p className="text-base text-gray-400">{movie.overview || "No overview available."}</p>
                </div>

                <div>
                <h4 className="text-base font-bold mb-4">Trailer</h4>

                {/* Trailer section */}
                <div className="w-full h-[300px] md:h-[600px] rounded-lg">
                    {trailer ? (
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title={trailer.name}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        ) : (
                        <p className="text-gray-400 text-sm">Trailer not available</p>
                        )}

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default CardDetail;
