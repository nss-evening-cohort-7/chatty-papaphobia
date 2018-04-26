const loadMessages = require('./messages');
const dom = require('./dom');

const messageLoad = function () {
  const data = JSON.parse(this.responseText).messages;
  console.log('data', data);
  dom(data);
};

const messageError = function () {
  console.log('What did we dooooooo?!');
};

const initializer = () => {
  loadMessages(messageLoad, messageError);
};

module.exports = initializer;
