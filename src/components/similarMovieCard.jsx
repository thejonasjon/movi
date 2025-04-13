import { Heart, Star } from "lucide-react";
// import Link from "rea"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SimilarMovieCard({movie}){

    return(
        <motion.div className="flex-grow md:flex-1/4 lg:flex-1/6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link to={`/details/${movie.id}`} className="block aspect-[2/3]">
                <div className="relative rounded-lg overflow-hidden shadow-md flex-grow">
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : MovieImagePlaceholder}
                        alt={movie.title}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                     <div className="absolute h-full w-full inset-0 bg-[linear-gradient(180deg,rgba(7,7,122,0.25)_55%,rgba(20,19,71,0.45)_100%)] text-black">

                    </div>
                </div>

                <div className="info mt-3">
                    <div className="mb-1">
                        <h5 className="text-[13px] font-normal mb-1.5">{movie.title}</h5>
                        <p className="text-[12px] font-normal">{new Date().getFullYear(movie.release_date)}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default SimilarMovieCard