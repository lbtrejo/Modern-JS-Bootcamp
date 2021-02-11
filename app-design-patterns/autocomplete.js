const createAutoComplete = ({ root }) => {
    root.innerHTML = `
        <label><b>Search for a Movie</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');

    const onInput = async (event) => {
        // Grab our movies result and mark await 
        const movies = await fetchData(event.target.value);

        // If no results are returned, remove the dropdown and return out of the function
        if (!movies.length) {
            dropdown.classList.remove('is-active');
            return;
        }

        // clear the resultsWrapper if any previous content is listed
        resultsWrapper.innerHTML = '';

        // active the dropdown
        dropdown.classList.add('is-active');

        // build HTML for our movie results and populate them into the wrapper
        for (let movie of movies) {
            const option = document.createElement('a');
            const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster
            option.classList.add('dropdown-item');
            
            option.innerHTML = `
            <img src="${imgSrc}" />
            ${movie.Title} (${movie.Year})
            `;
            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active');
                input.value = movie.Title
                onMovieSelect(movie)
            })

            resultsWrapper.appendChild(option);
        }
    };

    input.addEventListener('input', debounce(onInput, 500));

    // Add a full document event listener for click events
    // Check to see if the target is contained in our 'root' section
    // If so, do nothing.  If not, close the dropdown.
    document.addEventListener('click', event => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove('is-active');
        }
    })
}