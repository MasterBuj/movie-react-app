
import { useState } from "react";
import { Link } from "react-router-dom";
import { getGenre } from "../../helpers/genres";
import "./filter.css";


function MoviesFilter() {

    const [selectedGenre, updateSelectedGenre] = useState([]);

    const qParams = new URLSearchParams(location.search)
    const selectedGenreParams = qParams.get("with_genres").split(",")


    function handleGenre(e) {
        if (selectedGenre.includes(e.target.innerText.toLowerCase)) {
            updateSelectedGenre(selectedGenre.filter(item => item !== e.target.innerText.toLowerCase))
        } else {
            updateSelectedGenre([...selectedGenre, e.target.innerText]);

        }
    }

    function params() {
        let genre = `&with_genres=${selectedGenre.toString().toLowerCase()}`

        return genre
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
                                ${selectedGenre.includes(genre.name) && "selected-genre"} 
                                ${selectedGenreParams.indexOf(genre.name.toLowerCase()) > -1 && "selected-genre"}
                                `}
                                onClick={handleGenre} >
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>
                <Link className="submit button-wide" to={`/search?${params()}`}>Filter</Link>
            </section>
        </>
    )
}

export default MoviesFilter