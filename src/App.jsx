import NavBar from "./components/header/navbar";
import '../src/css/style.css'
import Hero from "./components/hero";
import { ChevronDown, Search } from "lucide-react"
import MovieList from "./components/movieList";
import Footer from "./components/footer";

import CardDetail from "./components/cardDetail";
import SimilarMovieCard from "./components/similarMovieCard"


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <section>
        <div className="bg-black px-10 md:px-16">
          <div className="heading flex flex-wrap justify-between items-center gap-4">
            <div>
                <h4 className="text-xl font-medium text-white">Explore Movies</h4>
            </div>
            <div className="flex items-center gap-3">
                        <div className="flex flex-grow items-center relative">
                            <Search className="stroke-gray-600 absolute left-2 md:left-4" strokeWidth={1} />
                            <input type="text" placeholder="Search movie.." className="max-w-30 md:max-w-full md:min-w-full text-sm text-gray-500 border border-gray-800 focus:outline-0 rounded-md px-8 md:px-12 py-2"/>
                        </div>

                        <div className="flex-grow">
                            <div className="flex relative">

                                <button className="flex justify-between items-center gap-4 md:gap-6 text-sm font-light text-gray-100 border border-gray-800 rounded-md px-4 py-2 cursor-pointer">
                                    All Genres
                                    <ChevronDown className="stroke-gray-700" strokeWidth={1}/>
                                </button>

                                <div className="w-full absolute hidden top-11 left-0 bg-black text-white border rounded-md border-gray-800 px-4 py-2">
                                    <button className="text-sm font-extralight text-gray-100">Option</button>
                                </div>
                            </div>
                        </div>
            </div>
          </div>
          <MovieList />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
