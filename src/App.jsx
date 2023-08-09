import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/fragments/Footer";
import Navigation from "./components/fragments/Navigation";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/global.css";
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
