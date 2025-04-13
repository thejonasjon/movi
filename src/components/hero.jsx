import { Info, Play } from "lucide-react"
import { MainBtn } from "./utils"
import moviePoster from  '../assets/images/movie-poster.jpg'

function Hero(){
    return(
        <section>
            <div className="h-[84vh] text-white flex flex-col justify-end items-start px-10 py-10 md:pb-40"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(10, 10, 46, 0.59) 68%, rgba(0, 0, 0, 0.74) 100%), url(${moviePoster})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="text md:w-3/8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Inception</h2>
                    <p className="text-sm md:text-base text-gray-300">A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</p>
                </div>

                <div className="flex gap-4 mt-4 md:mt-8">
                    <MainBtn className="text-sm bg-blue-500 text-black hover:bg-blue-600 transition-all ease-in-out" BtnIcon={<Play strokeWidth="1.5" size="16"/>} btnText="Watch Trailer" />
                    <MainBtn className="text-sm bg-gray-100 text-black hover:bg-gray-300 transition-all ease-in-out" BtnIcon={<Info strokeWidth="1.5" size="16"/>} btnText="More Info" />
                </div>
            </div>
        </section>
    )
}

export default Hero