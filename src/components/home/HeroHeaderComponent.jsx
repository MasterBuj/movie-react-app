import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import api_query, { API_IMAGE_BASE } from "../../helpers/APIs";
import { GetGenreById, getColorVoteAverage } from "../../helpers/MovieTools";
import useFetch from '../../hooks/useFetch';
import "./styles/HeroHeader.css";


function HeroHeaderComponent() {


    const { data, loading, error } = useFetch(api_query({ action: "getNowPlaying" }))

    const response = data?.data?.results;

    if (loading) return <p>Loading...</p>

    if (error) return <p>{console.log(error.message)} THIS</p>

    const slickReact_Settings = {
        infinite: true,
        variableWidth: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false

    }

    return (
        <header>


            <Slider {...slickReact_Settings}>
                {
                    response?.map(movie => {
                        const { poster_path, title, vote_average, overview, release_date, backdrop_path, genre_ids } = movie;

                        return (
                            <div className="hero-banner" key={movie.id}>
                                <div className="hero-img">
                                    <img src={API_IMAGE_BASE + backdrop_path} alt="Hero banner" />
                                </div>
                                <div className="hero-detail">
                                    <NavLink
                                        className="hero-more"
                                        to={`/moviedetails/${movie.id}`}
                                    ><img src={API_IMAGE_BASE + poster_path} alt="" /> </NavLink>
                                    <h1>{title}</h1>
                                    <div className="subtitle">
                                        <p>{release_date.slice(0, 4)}</p>
                                        <p className={`${getColorVoteAverage(vote_average)} font`}>{vote_average}</p>
                                        <p className="genre-list">
                                            {GetGenreById(genre_ids).map(genre => {
                                                return (
                                                    <NavLink
                                                        key={`${genre.id}_${genre.name}`}
                                                        className="hero-genre"
                                                        to={`/search?&with_genres=${genre.id}`}
                                                    >{genre.name}</NavLink>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <p className="desc">
                                        {overview}
                                    </p>
                                    <NavLink
                                        className="hero-more"
                                        to={`/moviedetails/${movie.id}`}
                                    >Show more</NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </header>
    )
}

export default HeroHeaderComponent
