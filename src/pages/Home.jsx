import AsideComponent from "../components/home/AsideComponent";
import HeroHeaderComponent from "../components/home/HeroHeaderComponent";
import MovieCards from "../components/home/MovieCardsComponent";
import "./styles/Home.css";


function Home() {

    return (
        <>
            <HeroHeaderComponent />
            <main>
                <AsideComponent />
                <MovieCards />
            </main>
        </>
    )
}

export default Home