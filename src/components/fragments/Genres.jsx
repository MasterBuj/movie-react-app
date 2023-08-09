import { ChangeMovies, getGenre } from "../../helpers/index";
import "./styles/Genres.css";

function Genres(tabId) {

  function changeUrl(tag) {
    ChangeMovies(tag)
  }

  return (

    <div className="aside-tab genre-container" id={tabId.tabId} >
      <div className="all-tags" id="all-tags">
        {getGenre().map(genre => {
          return (
            <a key={`${genre.id}_${genre.name}`} className="color-tag genre"
              onClick={
                (e) => {
                  e.preventDefault();
                  changeUrl(genre.id)
                }
              }> {genre.name} </a>
          )
        })}
      </div>
    </div>

  )
}

export default Genres 