
const btnElement = document.querySelector('button'); 
const mainElement = document.querySelector('main');

/** ******************************
 * Message Generator Below:
 ******************************** */

const randomMessages = {
  oppening: ["Pair programming is", "Practice is", "Dedication is", "Having a goal is", "Self belief is"],
  middle: ["key", "necessary", "the best idea","Important","Crucial", "Fundamental"],
  closing: ["to success", "to a better understanding", "Achieving greatness", "Reaching your potential", "Bettering yourself"]
};

const messageList = [];
let msgCount = 0;

const chooseRandomMessage = (messages) => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const generateMessage = (randomMessages) => {
  const oppening = chooseRandomMessage(randomMessages.oppening);
  const middle = chooseRandomMessage(randomMessages.middle);
  const closing = chooseRandomMessage(randomMessages.closing);
  return oppening + ' ' + middle + ' ' + closing;
}

const addMessage = () => {
  const message = generateMessage(randomMessages);
  const msgBox = document.createElement('div');
  msgBox.className = 'msg-box accent-tile';
  msgBox.innerHTML = `<p class="message" data-number="${msgCount}">${message}</p><button>X</button>`;
  messageList.push(msgBox);
  msgCount += 1;
  printMessages();
};

const removeMessage = (event) => {
  const msgNode = event.target.parentElement;
  const index = messageList.indexOf(msgNode);
  msgNode.remove();
  messageList.splice(index, 1);
}

function printMessages() {
  messageList.forEach((msg) => {
    msgBtn = msg.querySelector('button'); 
    msgBtn.addEventListener('click', removeMessage);
    mainElement.appendChild(msg);
  });
}

/**
 * Event Listeners
 */

btnElement.addEventListener('click', addMessage);
