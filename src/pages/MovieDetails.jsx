import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useFetch } from '../hooks/index';
import "./styles/MovieDetails.css";


// Define propTypes for Moviedetails
MovieDetails.propTypes = {
  movie: PropTypes.string,
  isModal: PropTypes.string
};

function MovieDetails(props) {


  const id = location.pathname.split("/")[2]
  const url = id ? `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1` : "/api/v1/movie/502356"
  // https://api.themoviedb.org/3/movie/{movie_id}&api_key=04c35731a5ee918f014970082a0088b1

  // console.log("Props: ", props)
  // console.log("URL: ", url)
  const { data, loading } = useFetch(url)

  const response = data?.data;

  // Create our number formatter.
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  console.log(response)
  console.log(url)
  return (

    <div className="d-container" id="modal">
      {loading ?
        <h1>Loading...</h1> :
        <>
          <span className="" > {props.movie}</span>
          <div className="d-main">
            <div>
              {response?.poster_path &&
                <img
                  className="d-poster"
                  src={`https://image.tmdb.org/t/p/w1280${response?.poster_path}`} />}
            </div>
            <div className="d-overview">
              {response?.poster_path &&
                <img
                  className="d-backdrop"
                  src={`https://image.tmdb.org/t/p/w1280${response?.backdrop_path}`} />}

              <h1 className='style-reset'>{response?.title}</h1>
              <p className='style-reset'><b><i>{response?.tagline}</i></b></p>
              <ul className="all-tags">{
                response?.genres.map(genre => {
                  return (
                    <li key={`${genre.id}_${genre.name}`} className="color-tag genre">

                      <Link to={`/search?&with_genres=${genre.name.toLowerCase()}`}>{genre.name}</Link>
                    </li>
                  )
                })

              }
              </ul>
              <p>{response?.overview}</p>
              <p><b>Release Date: </b>{response?.release_date}</p>
              <p><b>Status: </b> {response?.status}</p>
              <p><b>Original Language: </b> {response?.original_language}</p>
              <p><b>Runtime: </b> {response?.runtime}m</p>
              <p><b>Budget: </b> {currency.format(response?.budget)}</p>
              <p><b>Revenue: </b> {currency.format(response?.revenue)}</p>
              <p><b>Website: </b><a href={response?.homepage} target="_blank" rel="noopener noreferrer">{response?.homepage}</a></p>
            </div>
          </div>
        </>
      }
    </div>

  )
}

export default MovieDetails