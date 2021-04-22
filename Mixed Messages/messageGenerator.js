let randomMessages = {
    oppening: ["Pair programming is", "Practice is", "Dedication is", "Having a goal is", "Self belief is"],
    middle: ["key", "necessary", "the best idea","Important","Crucial", "Fundamental"],
    closing: ["to success", "to a better understanding", "Achieving greatness", "Reaching your potential", "Bettering yourself"]
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

export { generateMessage };
