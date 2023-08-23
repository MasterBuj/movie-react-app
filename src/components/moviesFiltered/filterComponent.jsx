
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getGenre } from "../../helpers/genres";
import "./filter.css";

/**
 * Renders a filter section for movies, allowing users to select genres and apply the filter to search for movies based on the selected genres.
 *
 * @returns {JSX.Element} The filter section for movies.
 */
function MoviesFilter() {

    const location = useLocation()
    const qParams = new URLSearchParams(location.search)
    const genreParams = qParams.get("with_genres")

    const [selectedGenre, updateSelectedGenre] = useState(genreParams !== null ? genreParams.split(",") : []);

    // local URL: Search by genre
    const searchByGenre = `/search?&with_genres=${selectedGenre.toString()}`

    function handleGenre(e) {
        if (selectedGenre.includes(e.target.id)) {
            updateSelectedGenre(selectedGenre.filter(item => item !== e.target.id))
        } else {
            updateSelectedGenre([...selectedGenre, e.target.id]);
        }
    }


    return (
        <>
            <section className="filter">
                <h4 className="title">Genres</h4>
                <ul className="filter-genre">
                    {getGenre.map(genre => {
                        return (
                            <li
                                key={`${genre.id}_${genre.name}`}
                                id={genre.id}
                                className={`color-tag genre ${selectedGenre.includes(genre.id.toString()) && "selected-genre"}  
                                `}
                                onClick={handleGenre} >
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>
                <NavLink
                    className="submit button-wide"
                    to={searchByGenre}
                >Filter</NavLink>
            </section>
        </>
    )
}

export default MoviesFilter