const messagesDiv = document.getElementById('message-container');

const preloadMessages = (messages) => {
  let domString = '';
  messages.forEach((message) => {
    domString += `<div>
                    <div class="speech-bubble" id="message-card">
                      <p><span>${message.message}</span></p>
                    </div>
                    <div class="preloaded-name">
                      <p>${message.userId}</p>
                      <button type="button" class="btn btn-primary btn-xs active delete-button">Delete</button>
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
    <div class="newMessage-mainContainer">
      <div class="speech-bubble" id="new-message">
        <p><span>${message}</span></p>
      </div>
      <div class="preloaded-name">
        <p>${username}</p>
          <button type="button" class="btn btn-primary btn-xs active delete-button">Delete</button>
      </div>
    </div>
  `;
};

module.exports = {
  addMessage,
  printToDom,
};
