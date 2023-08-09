import { NavLink } from "react-router-dom"
import "./styles/Navigation.css"

function Navigation() {
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
            <form id="form">
                <div className="search">
                    <input placeholder="Search..." type="text" id="search" />
                    <button type="submit">Go</button>
                </div>
            </form>
        </div>
    )
}

export default Navigation