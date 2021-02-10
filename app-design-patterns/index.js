const baseURL = 'http://www.omdbapi.com/';
const fetchData =  async (searchTerm) => {
    const response = await axios.get(baseURL, {
        params: {
            apikey: omdbApiKey,
            s: searchTerm
            // i: 'tt0848228'
        }
    })

    return response.data.Search
};

const input = document.querySelector('input');
const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    console.log(movies)
};

input.addEventListener('input', debounce(onInput, 500));