import { useFetch } from '../hooks/index';
import "./styles/MovieDetails.css";

import PropTypes from 'prop-types';


// Define propTypes for Moviedetails
MovieDetails.propTypes = {
  movie: PropTypes.string,
  isModal: PropTypes.string
};

function MovieDetails(props) {

  const { data, loading, error } = useFetch(props.movie ? "/api/v1" + props.movie : "/api/v1/movie/502356")
  const response = data?.data;
  if (loading) return <p>Loading...</p>
  if (error) return <p>{console.log(error.message)} THIS</p>

  // Create our number formatter.
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="d-container" id="modal">
      <span className="" >X {props.movie}</span>
      <div className="d-main">
        <div>
          <img className="d-poster" src="/src/assets/poster2.jpg" />
        </div>
        <div className="d-overview">
          <img className="d-backdrop" src="/src/assets/banner2.jpg" />

          <h1 className='style-reset'>{response?.title}</h1>
          <p className='style-reset'><i>{response?.tagline}</i></p>
          <h3>{response?.release_date}</h3>
          <h4 className="all-tags">{
            response?.genres.map(genre => {
              return (
                <a key={`${genre.id}_${genre.name}`} className="color-tag genre"
                  onClick={
                    (e) => {
                      e.preventDefault();
                    }
                  }> {genre.name} </a>
              )
            })}
          </h4>

          <h3>Overview</h3>
          <p>{response?.overview}</p>

          <p><b>Status: </b> {response?.status}</p>
          <p><b>Original Language: </b> {response?.original_language}</p>
          <p><b>Runtime: </b> {response?.runtime}m</p>
          <p><b>Budget: </b> {currency.format(response?.budget)}</p>
          <p><b>Revenue: </b> {currency.format(response?.revenue)}</p>
          <p><b>Website: </b><a href={response?.homepage} target="_blank" rel="noopener noreferrer">{response?.homepage}</a></p>
        </div>
      </div>
    </div>

  )
}

export default MovieDetails