
import { useState } from "react";
import { Link } from "react-router-dom";
import { getGenre } from "../../helpers/genres";
import "./filter.css";

function MoviesFilter() {

    const qParams = new URLSearchParams(location.search)
    const genreParams = qParams.get("with_genres")

    const [selectedGenre, updateSelectedGenre] = useState(genreParams !== null ? genreParams.split(",") : []);

    function handleGenre(e) {
        if (selectedGenre.includes(e.target.innerText.toLowerCase())) {
            updateSelectedGenre(selectedGenre.filter(item => item !== e.target.innerText.toLowerCase()))
        } else {
            updateSelectedGenre([...selectedGenre, e.target.innerText.toLowerCase()]);
        }
    }


    return (
        <>
            <section className="filter">
                <h4 className="title">Genres</h4>
                <ul className="filter-genre">
                    {getGenre().map(genre => {
                        return (
                            <li
                                key={`${genre.id}_${genre.name}`}
                                className={`
                                color-tag genre
                                ${selectedGenre.includes(genre.name.toLowerCase()) && "selected-genre"}  
                                `}
                                onClick={handleGenre} >
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>
                <Link className="submit button-wide" to={`/discover/movie?with_genres=${selectedGenre.toString().toLowerCase()}}`}>Filter</Link>
            </section>
        </>
    )
}

export default MoviesFilter