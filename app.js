// Destructuring the has from the window.location
const { hash } = window.location;
// Decoding the hash (there's # inside the hash property, so replace that with an empty string)
const message = atob(hash.replace('#', ''));
// If there's a message, add hide class to #message-form, and remove hide class from #message-show
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    // Put the message inside the h3 element
    document.querySelector('h6').innerHTML = message;
};

// Submit event listener
document.querySelector('form').addEventListener('submit', (event) => {
    // Preventing sending message to some backend server (which doesn't exist in this case)
    event.preventDefault();

    // When message is submitted, hide message form and show link sharing form
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    // Getting the user input and encrypting it
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    // Putting the encrypted message into URL hash
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    // Automatically selecting the URL after submitting the user input
    linkInput.select();
});