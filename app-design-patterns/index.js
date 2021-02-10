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

// fetchData();

const input = document.querySelector('input');

input.addEventListener('input', (event) => {
    fetchData(event.target.value);
})