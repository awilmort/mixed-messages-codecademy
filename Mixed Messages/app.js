// import { generateMessage } from 'messageGenerator.js';
// import { randomMessages } from './randomMessages.js';

const btnElement = document.querySelector('button'); 
const msgElement = document.querySelector('#message');

const displayMessage = () => {
    const message = generateMessage(randomMessages);
    msgElement.innerHTML = message;
};

/** ******************************
 * Messange Generator Below:
 ******************************** */

const randomMessages = {
  oppening: ["Pair programming is", "Practice is"],
  middle: ["key", "necessary", "the best idea"],
  closing: ["to success", "to a better understanding"]
};

const chooseRandomMessage = (messages) => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const generateMessage = (randomMessages) => {
  const oppening = chooseRandomMessage(randomMessages.oppening);
  const middle = chooseRandomMessage(randomMessages.middle);
  const closing = chooseRandomMessage(randomMessages.closing);
  return oppening + ' ' + middle + ' ' + closing;
}

/**
 * Event Listeners
 */

btnElement.addEventListener('click', displayMessage);