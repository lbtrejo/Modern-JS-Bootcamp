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

// Make debounce a higher order function that both ACCEPTS and RETURNS a function

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};

const onInput = (event) => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));