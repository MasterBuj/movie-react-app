
import Genres from "../fragments/Genres";
import "./styles/Sidebar.css";

function SidebarComponent() {

    function handleClick(id) {
        if (document.getElementById(id).classList.contains("active")) {
            return document.getElementById(id).classList.remove("active")
        }
        document.querySelectorAll(".aside-tab.active").forEach(tab => {
            tab.classList.remove("active")
        })
        document.getElementById(id).classList.toggle("active")
    }

    return (
        <aside>
            <div className="tab">
                <h3 className="title" onClick={() => handleClick("genres")} >GENRES</h3>
            </div>
            <Genres tabId="genres" />
        </aside>
    )
}

export default SidebarComponent