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
      if (e.target.innerHTML === 'Delete') {
        const userNewMsg = e.target.parentNode.parentNode;
        userNewMsg.classList.add('hide');
      };
    });
  };
};

const clear = (e) => {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = '';
};

const addEventListenerToRadio = (type, idOrClass, fn) => {
  if (type === 'id') {
    const radio = document.getElementById(idOrClass);
    radio.addEventListener('click', fn);
  }

  const radios = document.getElementsByClassName(idOrClass);
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click',fn);
  };
};

const nightTheme = (e) => {
  console.log('e', e);
};

const rainbowTheme = (e) => {
  console.log('e', e);
};

const largerTheme = (e) => {
  console.log('e', e);
};

const runAllEventListeners = () => {
  addEventListenerToButton('id', 'send', send);
  addEventListenerToButton('id','clear', clear);
  addEventListenerToButton('class', 'btn-wrap', (e) => {
    activeUser = e.target.id;
  });
  addEventListenerToRadio('id', 'night-sky', nightTheme);
  addEventListenerToRadio('id', 'rainbow-text-button', rainbowTheme);
  addEventListenerToRadio('id', 'larger-text', largerTheme);
  inputMessage();
};

module.exports = {
  runAllEventListeners,
  deleteBtn,
};
