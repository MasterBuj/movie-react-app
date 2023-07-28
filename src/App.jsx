import './App.css'
import HeroHeaderComponent from "./components/HeroHeaderComponent"
import MoviesContainerComponent from "./components/MoviesContainerComponent"
import SidebarComponent from "./components/SidebarComponent"

function App() {


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

export default App
