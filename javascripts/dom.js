const messagesDiv = document.getElementById('message-container');

const preloadMessages = (messages) => {
  let domString = '';
  messages.forEach((message) => {
    domString += `<div>
                    <div class="speech-bubble" id = "message-card">
                      <p>${message.message}</p>
                    </div>
                    <div class="preloaded-name">
                      <p class="font-weight-bold">${message.userId}</p>
                    </div>
                  </div>`;
  });
  return domString;
};

const printToDom = (messages) => {
  messagesDiv.innerHTML = preloadMessages(messages);
};

module.exports = printToDom;
