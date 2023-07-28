import { GetGenres } from "../helpers/MovieTools";


function SidebarComponent() {
    return (
        <div className="right-container">
            {/* MOVIE GENRES */}
            <div className="box-container">
                <h3 className="title">MOVIE GENRES</h3>
                <div className="all-tags" id="all-tags">
                    {GetGenres().map(genre => {
                        return (
                            <a key={`${genre.id}_${genre.name}`} className="color-tag genre" href="#" id={genre.id}>{genre.name}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent