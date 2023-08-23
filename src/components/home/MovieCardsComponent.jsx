
import { NavLink, useLocation } from "react-router-dom";
import api_query, { API_IMAGE_BASE } from "../../helpers/APIs";
import { getColorVoteAverage } from "../../helpers/index";
import { useFetch } from '../../hooks/index';
import "./styles/MoviesContainer.css";

/**
 * React component that displays a list of movies based on the query parameters in the URL.
 * @returns JSX elements representing the list of movie cards.
 */
function MovieCardsComponent() {
    const location = useLocation();
    const qParams = new URLSearchParams(location.search);

    const genres = qParams.get("with_genres");
    const search = qParams.get("query");
    const list = qParams.get("list");

    const listActions = {
        upcoming: "getUpComing",
        noplaying: "getNowPlaying",
        toprated: "getTopRated",
        popular: "getPopular",
    };

    /**
     * Determines the API URL based on the query parameters.
     * @returns {string} The API URL.
     */
    function getApiUrl() {
        if (genres) {
            return api_query({
                action: "searchBy",
                genre: genres,
            });
        }

        if (search) {
            return api_query({
                action: "searchMovie",
                search: search,
            });
        }

        if (list) {
            const action = listActions[list];
            if (action) {
                return api_query({ action });
            }
        }

        return api_query({
            action: "getPopular",
        });
    }

    const { data, loading, error } = useFetch(getApiUrl());
    const response = data?.data?.results;

    return (
        <section className="movies" id="content">
            {error ? (
                <h1>{error.message}</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                response?.map(({ id, title, vote_average, overview, poster_path, release_date }) => {
                    if (!poster_path) return null;

                    return (
                        <div className="movie" key={id}>
                            <img src={API_IMAGE_BASE + poster_path} alt={title} className="poster" />

                            <h3 className="movie-title">
                                <p className={`${getColorVoteAverage(vote_average)}  rating`}>{vote_average}</p>
                                <p> {title} </p>
                            </h3>

                            <div className="overview">
                                <NavLink to={`/moviedetails/${id}`}>
                                    <h3>{title}</h3>
                                    <p>{release_date}</p>
                                    <p className="summary">{overview}</p>
                                    <span className="seemore">See more→</span>
                                </NavLink>
                            </div>
                        </div>
                    );
                })
            )}
        </section>
    );
}

export default MovieCardsComponent