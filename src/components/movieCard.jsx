// import Link from "rea"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";
import MovieImagePlaceholder from '../assets/images/poster-placeholder.png'

function MovieCard({movie}){
    const [isHover, setIsHover] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false)
    const vote_ = movie.vote_average.toFixed(1)

    return(
        <motion.div className="w-full relative rounded-lg overflow-hidden shadow-md flex-1/2 md:flex-1/6 flex-grow"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link to={`details/${movie.id}`} className="block aspect-[2/3]">
                <img
                    src={
                        movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : MovieImagePlaceholder
                    }
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* <div className="absolute top-0 left-0 z-1 h-100 inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity bg-black duration-300">

                </div> */}

                <div className="absolute h-full w-full inset-0 bg-[linear-gradient(180deg,rgba(7,7,122,0.25)_55%,rgba(20,19,71,0.45)_100%)] text-black">

                </div>
                <div className="absolute inset-0 w-full h-full flex justify-center items-end">
                        <span className="text-[14px] text-gray-300 font-light mb-3">{new Date(movie.release_date).getFullYear()}</span>
                </div>

                <div className="absolute right-2 top-2 z-10">
                    <button className="bg-blue-900 p-2 rounded-full cursor-pointer hover:bg-blue-950 transition-all ease-in-out duration-500"
                        onClick={(e) =>{
                            e.preventDefault()
                            e.stopPropagation()
                            setIsFavourite(!isFavourite)
                        }}
                    >


                        <Heart className={`stroke-white text-gray-800 ${isFavourite ? "stroke-0 text-yellow-400 fill-yellow-500" : ""} transition-all ease-in-out duration-700`} size={18} strokeWidth={1.5}/>
                    </button>
                </div>

                { isHover && (
                    <div className="info text-gray-200 absolute bottom-4 px-4">
                        <div className="mb-1">
                            <h4 className="text-base font-semibold">{movie.title}</h4>
                        </div>
                        <div className="rating flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                            <span className="text-xs font-semibold">{vote_}</span>
                        </div>
                    </div>
                )}

            </Link>
        </motion.div>
    )
}

export default MovieCard