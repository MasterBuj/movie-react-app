import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import api_query, { API_IMAGE_BASE } from "../helpers/APIs";
import { useFetch } from '../hooks/index';
import "./styles/MovieDetails.css";

// Define propTypes for Moviedetails
MovieDetails.propTypes = {
  movie: PropTypes.string,
  isModal: PropTypes.string
};

function MovieDetails(props) {
  const { movieId } = useParams();

  const url = movieId ? api_query({
    action: "getMovieDetails",
    movieId: movieId
  }) : "/api/v1/movie/502356";

  const { data, loading } = useFetch(url);

  const response = data?.data;

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  const {
    poster_path: posterPath,
    backdrop_path: backdropPath,
    title,
    tagline,
    genres = [],
    overview,
    id,
    imdb_id: imdbId,
    original_title: originalTitle,
    status,
    popularity,
    vote_average: voteAverage,
    vote_count: voteCount,
    release_date: releaseDate,
    original_language: originalLanguage,
    runtime,
    budget,
    revenue,
    belongs_to_collection: collection,
    homepage
  } = response || {};

  return (
    <div className="d-container" id="modal">
      {loading ?
        <h1>Loading...</h1> :
        <>
          <span className="" > {props.movie}</span>
          <div className="d-main">
            <div>
              {posterPath &&
                <img
                  className="d-poster"
                  src={API_IMAGE_BASE + posterPath}
                />
              }
            </div>
            <div className="d-overview">
              {response?.backdrop_path &&
                <img
                  className="d-backdrop"
                  src={API_IMAGE_BASE + backdropPath}
                />
              }
              <h1 className='style-reset'>{title}</h1>
              <p className='style-reset'><b><i>{tagline}</i></b></p>
              <br />
              <ul className="all-tags">
                {genres.map(genre => (
                  <Link
                    key={`${genre.id}_${genre.name}`}
                    className="color-tag genre"
                    to={`/search?&with_genres=${genre.id}`}
                  >{genre.name}</Link>

                ))}
              </ul>
              <p>{overview}</p>
              <p><b>TMDB ID: </b>{id}</p>
              <p><b>IMBD ID: </b>{imdbId}</p>
              <p><b>Original Title: </b>{originalTitle}</p>
              <p><b>Status: </b> {status}</p>
              <p><b>Papularity: </b>{popularity}</p>
              <p><b>Vote Avarage: </b>{voteAverage} <b>/ 10 ({voteCount})</b></p>
              <p><b>Release Date: </b>{releaseDate}</p>
              <p><b>Original Language: </b> {originalLanguage}</p>
              <p><b>Runtime: </b> {runtime}m</p>
              <p><b>Budget: </b> {formatCurrency(budget)}</p>
              <p><b>Revenue: </b> {formatCurrency(revenue)}</p>
              <p><b>Collection: </b> {collection}</p>
              <p><b>Website: </b><a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></p>
            </div>
          </div>
        </>
      }
    </div>
  );
}



export default MovieDetails