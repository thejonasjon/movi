import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";

function SearchInput({ setSearchMovie, setLoading }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadSearch = async () => {
      if (!searchQuery) {
        setSearchMovie([]);
        return;
      }

      setLoading(true);
      try {
        const loadData = await searchMovies(searchQuery);
        setSearchMovie(loadData);
      } catch (err) {
        console.log("Error fetching search results...");
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      loadSearch();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, setSearchMovie, setLoading]);

  return (
    <div className="flex items-center relative flex-grow">
      <Search
        className="stroke-gray-600 absolute left-2 md:left-4"
        strokeWidth={1}
      />
      <input
        type="text"
        placeholder="Search movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full text-sm text-gray-300 border border-gray-800 focus:outline-0 rounded-md px-8 md:px-12 py-2 bg-black"
      />
    </div>
  );
}

export default SearchInput;
