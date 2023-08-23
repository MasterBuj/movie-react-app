import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getGenre } from "../../helpers/index";
import Accordion from "../fragments/Accordion";
import "./styles/Aside.css";

/**
 * Renders an aside element with an accordion component for selecting movie genres.
 *
 * @returns {JSX.Element} The JSX code for rendering an aside element with an accordion component for selecting movie genres.
 */
function AsideComponent() {

    const [selectedGenre, updateSelectedGenre] = useState([]);

    // URL: Search by genre
    const searchByGenre = `/search?&with_genres=${selectedGenre.toString()}`

    function handleGenre(e) {
        if (selectedGenre.includes(e.target.id)) {
            updateSelectedGenre(selectedGenre.filter(item => item !== e.target.id))
        } else {
            updateSelectedGenre([...selectedGenre, e.target.id]);
        }
    }

    function AllGenres() {
        return (
            <div id="genres" >
                <ul className="all-tags" id="all-tags">

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

                {selectedGenre.length >= 1 &&
                    <NavLink
                        className="button"
                        to={searchByGenre}
                    >Filter</NavLink>
                }

            </div>
        );
    }


    return (
        <aside>

            <Accordion title="Genres" content={<AllGenres />} expand={true} />

        </aside>
    )
}

export default AsideComponent