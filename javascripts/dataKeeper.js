const loadMessages = require('./messages');
const dom = require('./dom');
const events = require('./events');

const messageLoad = function () {
  const data = JSON.parse(this.responseText).messages;
  dom.printToDom(data);
  events.deleteBtn();
};

const messageError = function () {
  console.log('What did we dooooooo?!');
};

const initializer = () => {
  loadMessages(messageLoad, messageError);
};

module.exports = initializer;
