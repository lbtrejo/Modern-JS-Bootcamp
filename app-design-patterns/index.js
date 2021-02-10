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

let timeoutId;

const onInput = (event) => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500)
}

input.addEventListener('input', onInput)