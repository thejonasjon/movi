import { useEffect, useState } from "react";
import { getGenres } from "../services/api";
import { Dropdown } from "./utils";

function Genres() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGenres = async () => {
        try {
            const genresData = await getGenres();
            // Prepend "All Genres" as a fake genre
            setGenres([{ id: 0, name: "All Genres" }, ...genresData]);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
        };
        loadGenres();
    }, []);

  return (
    <>
      {!loading && genres.length > 0 && (
        <Dropdown dropdownText="All Genres" genres={genres} />
      )}
    </>
  );
}

export default Genres;
