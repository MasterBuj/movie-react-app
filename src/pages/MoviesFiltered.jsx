

import Accordion from "../components/fragments/Accordion";
import MoviesContainerComponent from "../components/home/MoviesContainerComponent";
import MoviesFilter from "../components/moviesFiltered/filterComponent";
import './styles/MoviesFiltered.css';

function MoviesFiltered() {


    return (
        <>
            <main className="filter-main">
                <Accordion title="Filter" content={<MoviesFilter />} expand={false} />
                <MoviesContainerComponent />
            </main>
        </>
    )
}

export default MoviesFiltered