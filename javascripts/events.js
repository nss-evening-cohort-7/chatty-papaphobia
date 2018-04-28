const dom = require('./dom.js');
let activeUser = '';
/* 1st parameter is the id of the element you want to add the listener to. 2nd parameter is the fn that runs when the button is clicked. */
const addEventListenerToButton = (type, idOrClass, fn) => {
  if (type === 'id') {
    const button = document.getElementById(idOrClass);
    button.addEventListener('click', fn);
  }

  const buttons = document.getElementsByClassName(idOrClass);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',fn);
  };

};

// const setColor = (e) => {
//   let target = e.target,
//       status = e.target.classList.contains('active');
//       console.log('active');

//   e.target.classList.add(status ? 'inactive' : 'active');
//   e.target.classList.remove(status ? 'active' : 'inactive');

const disableSend = (length) => {
  const button = document.getElementById('send');
  button.disabled = true;
};

const enableSend = (length) => {
  const button = document.getElementById('send');
  button.classList.remove('disabled');
};

const inputMessage = () => {
  const input = document.getElementById('input');
  input.addEventListener('keyup', (e) => {
    if (input.value.length === 0) {
      disableSend();
    } else {
      enableSend();
    }

    if (e.which === 13 || e.keyCode === 13) {
      dom.addMessage(input.value, activeUser);
      input.value = '';
      disableSend();
    };
  });
};

const send = (e) => {
  if (!e.target.classList.contains('disabled')) {
    const input = document.getElementById('input');
    console.log('scoping problem', activeUser);
    dom.addMessage(input.value, activeUser);
    input.value = '';
    e.target.classList.add('disabled');
  }

};

const clear = (e) => {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = '';
};

const runAllEventListeners = () => {
  addEventListenerToButton('id', 'send', send);
  addEventListenerToButton('id','clear', clear);
  addEventListenerToButton('class', 'btn-wrap', (e) => {
    activeUser = e.target.id;
  });
  inputMessage();

};

module.exports = {
  runAllEventListeners,
};
