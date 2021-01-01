let firstPhase = ['Remember this:', 'Always remember: ', 'Make yourself 100 percent sure that', 'If you\'re ever feeling doubtful:'
, 'If you need an advice'];
let secondPhase = ['there will always be tomorrow, so get yourself a beer!', 'no matter if you\'re straight or gay, at the end of the day it\'s night',
'you should wear sneakers if you are a ninja', 'sleeping is so easy, that you can do that with your eyes closed!'];

const randomLine = (firstPhase, secondPhase) => {
    if (typeof firstPhase === 'object' && typeof secondPhase === 'object') {
        let first = Math.floor(Math.random() * firstPhase.length);
        let second = Math.floor(Math.random() * 4);
        console.log(firstPhase[first] + "\n" + secondPhase[second]);
    } else {
        console.log('Please provide two arrays containing strings as arguments!');
    }
}

randomLine(firstPhase, secondPhase);
