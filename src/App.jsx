import NavBar from "./components/header/navbar";
import '../src/css/style.css'
import Hero from "./components/hero";
import { Search } from "lucide-react"
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import Genres from "./components/genres";

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <section>
        <div className="bg-black px-10 md:px-16 py-6 md:py-10">
          <div className="heading flex flex-wrap justify-between items-center gap-4">
            <div>
                <h4 className="text-xl font-medium text-white">Explore Movies</h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-grow items-center relative">
                  <Search className="stroke-gray-600 absolute left-2 md:left-4" strokeWidth={1} />
                  <input type="text" placeholder="Search movie.." className="max-w-30 md:max-w-full md:min-w-full text-sm text-gray-500 border border-gray-800 focus:outline-0 rounded-md px-8 md:px-12 py-2"/>
              </div>

              <Genres />
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
