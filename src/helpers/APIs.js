

export default function api_query(query) {
    let url = "API_DEFAULT"
    const action = query.action || false
    const genre = query.genre || null
    const querySearch = query.search || null
    const movieId = query.movieId || null

    // search movie by their genre or keyword
    if (action === "searchBy") {
        if (genre) return import.meta.env.VITE_API_SEARCH_BY_CATEGORY + genre
    }

    // search movie by their name
    if (action === "searchMovie") if (querySearch) return import.meta.env.VITE_API_SEARCH + querySearch

    // Get Movie Details
    if (action === "getMovieDetails") if (movieId) return import.meta.env.VITE_API_MOVIE_DETAILS + movieId + "?" + import.meta.env.VITE_API_KEY

    // MOVIE LISTS
    // get new movies
    if (action === "getDiscover") return import.meta.env.VITE_API_DISCOVER

    // get now showing movie on cinema
    if (action === "getNowPlaying") return import.meta.env.VITE_API_NOWPLAYING

    // get latest release movie
    if (action === "getPopular") return import.meta.env.VITE_API_POPULAR

    // get top rated movie
    if (action === "getTopRated") return import.meta.env.VITE_API_TOPRATED

    // get Upcoming movie
    if (action === "getUpComing") return import.meta.env.VITE_API_UPCOMING
    // END OF MOVIE LISTS

    return url
}

export const API_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE