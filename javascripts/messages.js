const messagesRequest = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/messages.json');
  myRequest.send;
};

module.exports = messagesRequest;
