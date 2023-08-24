import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/fragments/Footer";
import Navigation from "./components/fragments/Navigation";
import { Home, MovieDetails, MoviesFiltered, NotFoundPage } from "./pages/index";
import "./styles/global.css";
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/movie-react-app" element={<Home />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/search" element={<MoviesFiltered />} />
        <Route path="/movies" element={<MoviesFiltered />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
