
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getColorVoteAverage } from "../../helpers/index";
import { useFetch } from '../../hooks/index';
// import MovieDetails from "../../pages/MovieDetails";
import { NavLink } from "react-router-dom";
import "./styles/MoviesContainer.css";

function MoviesContainerComponent() {

    const params = useRef("")
    const location = useLocation()
    useEffect(() => {
        // const qParams = new URLSearchParams(location.search)
        // console.log("params", qParams.get("with_genres"));
        switch (location.pathname) {
            case "/search":
                // params.current = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&${location.search}`
                params.current = `/api/v1/popular/search?&${location.search}`
                break;

            default:
                break;
        }
    }, [location])



    console.log("params", params)
    const { data, loading, error } = useFetch(params.current ? params.current : "/api/v1/popular/")


    // const response = data && data.data.results
    const response = data?.data?.results;
    if (loading) return <p>Loading...</p>

    if (error) return <p>{console.log(error.message)} THIS</p>


    return (

        <section className="movies" id="content">
            {
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