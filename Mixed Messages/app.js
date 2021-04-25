/** ******************************
 * Global Variables Below:
 ******************************** */
const btnElement = document.querySelector('button'); 
const mainElement = document.querySelector('main');
const randomMessages = {
  opening: ["Pair programming is", "Practice is", "Dedication is", "Having a goal is", "Self belief is"],
  middle: ["key", "necessary", "the best idea","important","crucial", "fundamental"],
  closing: ["to success", "to a better understanding", "to achieving greatness", "to reaching your potential", "to bettering yourself"]
};
const messageList = [];
let msgCount = 0;

/** ******************************
 * Message Functions Below:
 ******************************** */
  /**
   * A helper function for `generateMessage` which chooses a message item at random
   * @param {array} messages 
   * @returns {string} - the array item, which is part of the message
   */
  const chooseRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  /**
   * Gets items from `randomMessages` object and returns a complete message
   * @param {object} randomMessages 
   * @returns {string} - the whole message: opening, middle, and closing parts
   */
  const generateMessage = (randomMessages) => {
    const opening = chooseRandomMessage(randomMessages.opening);
    const middle = chooseRandomMessage(randomMessages.middle);
    const closing = chooseRandomMessage(randomMessages.closing);
    return opening + ' ' + middle + ' ' + closing;
  }

  /**
   * Iterates through `messageList`
   *  - appends each item/`msg` to Main Element; 
   *  - adds an event listener to each item/`msg`
   */
  function printMessages() {
    messageList.forEach((msg) => {
      msgBtn = msg.querySelector('button'); 
      msgBtn.addEventListener('click', removeMessage);
      mainElement.appendChild(msg);
    });
  }
// End of Message Functions

/** ******************************
 * Button/Trigger Functions Below:
 ******************************** */
  /**
   * - Creates a msgBox node
   * - Pushes the node to messageList
   * - calls `printMessages()`
   */
  const addMessage = () => {
    const message = generateMessage(randomMessages);
    const msgBox = document.createElement('div');
    msgBox.className = 'msg-box accent-tile';
    msgBox.innerHTML = `<p class="message" data-number="${msgCount}">${message}</p><button>X</button>`;
    messageList.push(msgBox);
    msgCount += 1;
    printMessages();
    colorMessages();
  };

  /**
   * - Removes a Message node from `mainElement`
   * - removes the node from the message list // which is used to regenerate the messages during `printMessages()`
   * @param {object} event - event object when <x> button is clicked
   */
  function removeMessage(event) {
    const msgNode = event.target.parentElement;
    const index = messageList.indexOf(msgNode);
    msgNode.remove();
    messageList.splice(index, 1);
    colorMessages();
  }

  /**
   * Event Listeners
   */
  btnElement.addEventListener('click', addMessage);
// End of Trigger Functions

/** ******************************
 * Aesthetic/Style Functions Below:
 ******************************** */
  /**
   * generates an array of color tints based on a base color hsl (hue, saturation, lightness)
   * @param {array of numbers} hsl - three numbers for hsl values
   * @param {number} qty - as in, quantity of colors to return
   * @return {array} - an array of (hsl) numbers as css strings
   */
  function getTints(hsl, qty) {
    const tints = []; 
    const lightness = hsl[2];
    const maxLightness = 75;
    const tintIncrement = (Math.abs(maxLightness - lightness)) / qty;
    for (let i = 1; i <= qty; i++) {
      tints.unshift(`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2] + (tintIncrement * i)}%)`);   
    }
    return tints;
  }

  /**
   * Assigns CSS background style to each `p.message` node
   */
  function colorMessages() {
    const msgList = document.querySelectorAll(".msg-box"); 
    const colorValues = [0, 61, 40];
    const msgColors = getTints(colorValues, msgList.length); 
    msgList.forEach((msg, index) => {
      msg.style.background = msgColors[index]; 
      msg.style.border = `outset 4px ${msgColors[index]}`;
    });
  }
// End of style functions