const data = require('./dataKeeper.js');
const events = require('./events.js');

events.runAllEventListeners();
data();
