import NavBar from "./components/header/navbar";
import '../src/css/style.css';
import Hero from "./components/hero";
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import Genres from "./components/genres";
import { useState } from "react";
import SearchInput from "./components/search";

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);

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
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Pass state handler functions to SearchInput */}
              <SearchInput setSearchMovie={setSearchMovie} setLoading={setLoading} />
              <Genres />
            </div>
          </div>

          {/* Pass the search result to MovieList */}
          <MovieList movies={searchMovie} loading={loading} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
