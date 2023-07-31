import HeroHeaderComponent from "../components/index/HeroHeaderComponent";
import MoviesContainerComponent from "../components/index/MoviesContainerComponent";
import SidebarComponent from "../components/index/SidebarComponent";
import "./styles/Home.css";


function Home() {
    return (
        <>
            <HeroHeaderComponent />
            <main>
                <MoviesContainerComponent />
                <SidebarComponent />
            </main>
        </>
    )
}

export default Home