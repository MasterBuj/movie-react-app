import { NavLink, useNavigate } from "react-router-dom"
import "./styles/Navigation.css"

function Navigation() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.search.value !== "")
            navigate(`/search?query=${e.target.search.value}`)
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
                    <NavLink className="nav-link">
                        Now playing
                    </NavLink>
                    <NavLink className="nav-link">
                        Popular
                    </NavLink>
                    <NavLink className="nav-link">
                        Top rated
                    </NavLink>
                    <NavLink className="nav-link">
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