import HeroHeaderComponent from "../components/home/HeroHeaderComponent";
import MoviesContainerComponent from "../components/home/MoviesContainerComponent";
import SidebarComponent from "../components/home/SidebarComponent";
import "./styles/Home.css";


function Home() {

    return (
        <>
            <HeroHeaderComponent />
            <main>
                <SidebarComponent />
                <MoviesContainerComponent />
            </main>
        </>
    )
}

export default Home