let messageData = [];

const getMessages = () => {
  return messageData;
};

const setMessages = (messagesArray) => {
  messageData = messagesArray;
};

const getMessagesByUser = (userId) => {
  const selectedMessages = [];
  selectedMessages.forEach((messageData) => {
    if (messageData.userId === userId) {
      selectedMessages.push(messageData);
    }
  });
  return selectedMessages;
};

module.exports = {
  getMessages,
  setMessages,
  getMessagesByUser,
};
