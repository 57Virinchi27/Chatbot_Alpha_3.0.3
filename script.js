const inputBox = document.querySelector('.input-box');
const messages = document.querySelector('.messages');

inputBox.addEventListener('keydown', function(event) {
  if (event.code === 'Enter' && inputBox.value !== '') {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = inputBox.value;
    messages.appendChild(message);

    // Call your chatbot API and pass the user message
    // Wait for the response and add it to the chat window
    // Here's an example using a simple echo chatbot:
    const response = document.createElement('div');
    response.classList.add('response');
    response.innerHTML = 'You said: ' + inputBox.value;
    messages.appendChild(response);

    inputBox.value = '';
  }
});