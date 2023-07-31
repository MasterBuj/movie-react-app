import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";
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

    </>
  )
}

export default App
