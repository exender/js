const axios = require("axios");

const printTracks = (tracks) => {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        console.log(track.title);
    }
};

const fetchTracks = (searchTerm) => {
    axios
        .get("https://api.deezer.com/search?q=" + searchTerm)
        .then((response) => printTracks(response.data.data));
};

fetchTracks("nolwenn leroy");