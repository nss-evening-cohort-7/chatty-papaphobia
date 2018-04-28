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

const disableSend = (length) => {
  const button = document.getElementById('send');
  button.disabled = true;
};

const enableSend = (length) => {
  const button = document.getElementById('send');
  button.disabled = false;
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
  const input = document.getElementById('input');
  dom.addMessage(input.value, activeUser);
  input.value = '';
  deleteBtn();

};

const deleteBtn = () => {
  const button = document.getElementsByClassName('delete-button');
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
      const userTarget = e.target.parentNode.childNodes[1].innerText;
      const userMessage = e.target.parentNode.parentNode.childNodes[0];
      console.log('delete button', e);
      if (userTarget === 'stix') {
        const usersNewMsg = userMessage.parentNode;
        usersNewMsg.classList.add('hide');
      } else if (userTarget === 'ana') {
        const usersNewMsg = userMessage.parentNode;
        usersNewMsg.classList.add('hide');
      } else if (userTarget === 'anna') {
        const usersNewMsg = userMessage.parentNode;
        usersNewMsg.classList.add('hide');
      } else {
        const usersNewMsg = userMessage.parentNode;
        usersNewMsg.classList.add('hide');
      }
    });
  };
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
  deleteBtn,
};
