import express from "express";
import movieDB from "./movies.js";

const app = express();
const PORT = 8080;
const { popular, now_playing, movie_details } = movieDB()


app.use(express.json());

// search query=
app.get("/api/v1/search/movie?query=", (req, res) => {
  res.send(popular);
})

// genre &with_genres=
app.get("/api/v1/discover/movie?with_genres=:genres", (req, res) => {
  res.send(popular);
})

app.get("/api/v1/nowplaying/", (req, res) => {
  res.send(now_playing);
})


app.get("/api/v1/movie/:id", (req, res) => {
  res.send(movie_details);
})


app.get("*", (req, res) => {
  res.status(404).send("Not Found");
})



app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}/api/v1/ !`);
})