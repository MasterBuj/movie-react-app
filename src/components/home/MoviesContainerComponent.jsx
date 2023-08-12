
import { NavLink, useLocation } from "react-router-dom";
import { getColorVoteAverage } from "../../helpers/index";
import { useFetch } from '../../hooks/index';
import "./styles/MoviesContainer.css";

function MoviesContainerComponent() {

    const location = useLocation()
    let params = "/api/v1/popular/"
    // const qParams = new URLSearchParams(location.search)
    // console.log("params", qParams.get("with_genres"));
    if (location.pathname === "/search") {
        params = `/api/v1/popular/search${location.search}`
    }

    const { data, loading, error } = useFetch(params)
    const response = data?.data?.results;

    return (

        <section className="movies" id="content">
            {
                (error) ? <h1>{error.message}</h1> :
                    (loading) ? <h1>Loading...</h1> :

                        response?.map(movie => {
                            const { id, title, vote_average, overview, poster_path, release_date } = movie
                            return (
                                <div className='movie' key={id}>
                                    <img src={poster_path}
                                        alt={title} className="poster" />

                                    <h3 className="movie-title">
                                        <p className={`${getColorVoteAverage(vote_average)}  rating`}>{vote_average}</p>
                                        <p> {title} </p>
                                    </h3>

                                    <div className="overview">
                                        <NavLink to={`/moviedetails/${id}`}>
                                            <h3>{title}</h3>
                                            <p>{release_date}</p>
                                            <p className="summary">
                                                {overview}
                                            </p>
                                            <span className="seemore">See more→</span>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
            }


        </section>
    )

}

export default MoviesContainerComponent