import { getGenre } from "./genres.js";

export const GetGenreById = (genre_ids) => {
    const genres = getGenre()
    let genreName = []
    genre_ids.forEach(genre => {
        var result = genres.find(item => item.id === genre);
        genreName.push(result);
    });

    return genreName
};

export const GetGenres = () => {
    const genres = getGenre()
    return genres
};


export function getColorVoteAverage(vote) {
    if (vote >= 8)
        return "green-rate";
    if (vote >= 5)
        return "orange-rate";
    if (vote >= 0)
        return "red-rate";
}
