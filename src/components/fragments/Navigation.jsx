import { NavLink, useNavigate } from "react-router-dom"
import "./styles/Navigation.css"

function Navigation() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const searchQuery = e.target.search.value

        if (searchQuery !== "")
            navigate(`/search?query=${searchQuery}`)
    }

    return (
        <div className="header-bar">
            <div className="left-bar">
                <NavLink to="/">
                    <span className="logo">
                        <img src="/src/assets/localhost.svg" alt="" style={{ width: "140px" }} />
                    </span>
                </NavLink>
                <nav>
                    <NavLink className="nav-link" to="/movies?list=nowplaying">
                        Now playing
                    </NavLink>
                    <NavLink className="nav-link" to="/movies?list=popular">
                        Popular
                    </NavLink>
                    <NavLink className="nav-link" to="/movies?list=toprated">
                        Top rated
                    </NavLink>
                    <NavLink className="nav-link" to="/movies?list=upcoming">
                        Upcoming
                    </NavLink>
                </nav>
            </div>
            <form id="form" action="/search" method="GET" onSubmit={handleSubmit}>
                <div className="search">
                    <input placeholder="Search..." type="text" id="search" />
                    <button type="submit">Go</button>
                    {/* https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=min */}
                </div>
            </form>
        </div>
    )
}

export default Navigation