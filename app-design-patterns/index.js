const baseURL = 'http://www.omdbapi.com/';
const fetchData =  async (searchTerm) => {
    const response = await axios.get(baseURL, {
        params: {
            apikey: omdbApiKey,
            s: searchTerm
            // i: 'tt0848228'
        }
    })

    console.log(response.data);
};

const input = document.querySelector('input');
const onInput = (event) => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));