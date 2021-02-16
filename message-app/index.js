document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    console.log(input.value);

    const encodedData = btoa(input.value);
    console.log(encodedData);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encodedData}`;
    linkInput.select();
})