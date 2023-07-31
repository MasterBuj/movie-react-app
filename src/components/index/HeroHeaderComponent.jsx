import Slider from "react-slick";
import { GetGenreById, getColorVoteAverage } from "../../helpers/MovieTools";
import useFetch from '../../hooks/useFetch';
import "./styles/HeroHeader.css";
function HeroHeaderComponent() {

    const { data, loading, error } = useFetch("/api/v1/nowplaying/")

    const response = data?.data?.results;

    if (loading) return <p>Loading...</p>

    if (error) return <p>{console.log(error.message)} THIS</p>

    const slickReact_Settings = {
        infinite: true,
        variableWidth: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000,
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
                                    <img src={backdrop_path} alt="Hero banner" />
                                </div>
                                <div className="hero-detail">
                                    <img src={poster_path} alt="" />
                                    <h1>{title}</h1>
                                    <div className="subtitle">
                                        <p>{release_date.slice(0, 4)}</p>
                                        <p className={`${getColorVoteAverage(vote_average)} font`}>{vote_average}</p>
                                        <p className="genre-list">
                                            {GetGenreById(genre_ids).map(genre => {
                                                return (
                                                    <a key={`${genre.id}_${genre.name}`} className="hero-genr
                                                    e">{genre.name}</a>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <p className="desc">
                                        {overview}
                                    </p>
                                    <a href="#">Show more </a>
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
