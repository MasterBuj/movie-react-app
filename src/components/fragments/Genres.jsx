import { ChangeMovies, getGenre } from "../../helpers/index";
function Genres() {




  function changeUrl(tag) {
    ChangeMovies(tag)
  }

  return (
    <div className="right-container">
      {/* MOVIE GENRES */}
      <div className="box-container">
        <h3 className="title">MOVIE GENRES</h3>
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
    </div>
  )
}

export default Genres 