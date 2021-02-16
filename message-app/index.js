document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    console.log(input.value);

    const encodedData = btoa(input.value);
    console.log(encodedData);

    document.querySelector('#link-input').value = encodedData;
})