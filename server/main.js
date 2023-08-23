import express from "express";
import movieDB from "./movies.js";

const app = express();
const PORT = 8080;
const { popular, now_playing, movie_details } = movieDB()

// https://api.themoviedb.org/3  

// get new movies
// https://api.themoviedb.org/3  /discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1

// get now playing movies
// https://api.themoviedb.org/3  /movie/now_playing?page=1&api_key=04c35731a5ee918f014970082a0088b1

// search query
// https://api.themoviedb.org/3  /search/movie?query=  sort_by=popularity.desc&

// search by genre
// https://api.themoviedb.org/3  /discover/movie?with_genres=  sort_by=popularity.desc&

// https://api.themoviedb.org/3  /movie/{movie_id}/credits
// https://api.themoviedb.org/3  /movie/{movie_id}/external_ids
// https://api.themoviedb.org/3  /movie/{movie_id}/keywords

app.use(express.json());

// search query=
app.get("/api/v1/search/movie?query=", (req, res) => {
  res.send(popular);
})

// genre &with_genres=
app.get("/api/v1/discover/movie?&with_genres=:genres", (req, res) => {
  res.send(popular);
})

// hero now playing
app.get("/api/v1/nowplaying/", (req, res) => {
  res.send(now_playing);
})

// popular
app.get("/api/v1/popular/", (req, res) => {
  res.send(popular);
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