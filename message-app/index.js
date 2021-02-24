const { hash } = window.location;

if (hash) {
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('h1').innerText = atob(hash.slice(1));
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encodedData = btoa(input.value);
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encodedData}`;
    linkInput.select();
});
