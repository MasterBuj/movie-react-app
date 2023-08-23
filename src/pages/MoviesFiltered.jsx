

import Accordion from "../components/fragments/Accordion";
import MovieCards from "../components/home/MovieCardsComponent";
import MoviesFilter from "../components/moviesFiltered/filterComponent";
import './styles/MoviesFiltered.css';

function MoviesFiltered() {


    return (
        <>
            <main className="filter-main">
                <Accordion title="Filter" content={<MoviesFilter />} expand={false} />
                <MovieCards />
            </main>
        </>
    )
}

export default MoviesFiltered