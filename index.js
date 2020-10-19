const axios = require("axios");

const fetchTracks = (searchTerm) => {
    axios.get("https://api.deezer.com/search?q=discovery")
    .then(response => console.log(response.data));
};

fetchTracks("discovery");
