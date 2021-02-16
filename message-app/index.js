document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    const input = document.querySelector('#message-input');
    console.log(input.value);

    const encodedData = btoa(input.value);
    console.log(encodedData);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encodedData}`;
    linkInput.select();
})