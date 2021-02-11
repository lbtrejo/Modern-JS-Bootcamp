const baseURL = 'http://www.omdbapi.com/';
const fetchData =  async (searchTerm) => {
    const response = await axios.get(baseURL, {
        params: {
            apikey: omdbApiKey,
            s: searchTerm
            // i: 'tt0848228'
        }
    })
    if (response.data.Error){
        return [];
    }

    return response.data.Search
};

const input = document.querySelector('input');
const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    for (let movie of movies) {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title} (${movie.Year})</h1>
        `;
        document.querySelector('#target').appendChild(movieDiv);
    }
};

input.addEventListener('input', debounce(onInput, 500));