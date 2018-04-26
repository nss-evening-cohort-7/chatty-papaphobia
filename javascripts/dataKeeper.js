const loadMessages = require('./messages');

const messageLoad = function () {
  const data = JSON.parse(this.responseText);
  console.log('data', data);
};

const messageError = function () {
  console.log('What did we dooooooo?!');
};

const initializer = () => {
  loadMessages(messageLoad, messageError);
};

module.exports = initializer;
