import { useState } from "react";
import { Link } from "react-router-dom";
import { getGenre } from "../../helpers/index";
import Accordion from "../fragments/Accordion";
import "./styles/Aside.css";

function SidebarComponent() {

    const [selectedGenre, updateSelectedGenre] = useState([]);

    function handleGenre(e) {
        if (selectedGenre.includes(e.target.innerText)) {
            updateSelectedGenre(selectedGenre.filter(item => item !== e.target.innerText))
        } else {
            updateSelectedGenre([...selectedGenre, e.target.innerText]);

        }
    }

    function AllGenres() {
        return (
            <div id="genres" >
                <ul className="all-tags" id="all-tags">

                    {getGenre().map(genre => {
                        return (
                            <li
                                key={`${genre.id}_${genre.name}`}
                                className={`color-tag genre ${selectedGenre.includes(genre.name) && "selected-genre"}`}
                                onClick={handleGenre} >
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>

                {selectedGenre.length >= 1 &&
                    <Link className="button" to={`/search?&with_genres=${selectedGenre.toString().toLowerCase()}`} >Filter</Link>
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

export default SidebarComponent