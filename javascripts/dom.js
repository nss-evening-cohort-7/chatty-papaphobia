const messagesDiv = document.getElementById('message-container');

const preloadMessages = (messages) => {
  let domString = '';
  messages.forEach((message) => {
    domString += `<div>
                    <div class="night-sky speech-bubble" id="message-card">
                      <p>${message.message}</p>
                    </div>
                    <div class="preloaded-name">
                      <p>${message.userId}</p>
                    </div>
                  </div>`;
  });
  return domString;
};

const printToDom = (messages) => {
  messagesDiv.innerHTML = preloadMessages(messages);
};

// new msgDom
const addMessage = (message, username) => {
  const messageContainer = document.getElementById('message-container');

  messageContainer.innerHTML += `
    <div>
      <div class="speech-bubble">
        <p>${message}</p>
      </div>
      <div class="preloaded-name">
        <p>${username}</p>
      </div>
    </div>
  `;
};

module.exports = {
  addMessage,
  printToDom,
};
