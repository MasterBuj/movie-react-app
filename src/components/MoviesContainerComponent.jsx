
import { getColorVoteAverage } from "../helpers/MovieTools";
import useFetch from '../hooks/useFetch';


function MoviesContainerComponent() {

    const { data, loading, error } = useFetch("/api/v1/popular/")

    // const response = data && data.data.results
    const response = data?.data?.results;

    if (loading) return <p>Loading...</p>

    if (error) return <p>{console.log(error.message)} THIS</p>


    return (

        <div className="container" id="content">
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
                                <a href="#">
                                    <h3>{title}</h3>
                                    <p>{release_date}</p>
                                    <p className="summary">
                                        {overview}
                                    </p>
                                    <span className="seemore">See more→</span>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesContainerComponent