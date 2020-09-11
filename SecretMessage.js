let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'secretMessage');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');

let pos = 6;
let numbToRemove = 5;
secretMessage.splice(pos, numbToRemove, 'know');

console.log(secretMessage.join(' '));