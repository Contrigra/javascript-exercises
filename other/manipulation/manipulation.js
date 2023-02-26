// a <p> with red text that says “Hey I’m red!”

const container = document.querySelector('#container');
const redP = document.createElement('p')

redP.textContent = 'Hey I am red!';
redP.style.color = 'red';
container.appendChild(redP);

// an <h3> with blue text that says “I’m a blue h3!”

const body = document.querySelector('body');

let h3 = document.createElement('h3')
h3.style.color = 'blue';
h3.textContent = 'I am blue h3!'
body.append(h3)

// a <div> with a black border and pink background color with the following elements inside of it:

let borderDiv = document.createElement('div');
borderDiv.style.borderColor = 'black';
borderDiv.style.backgroundColor = 'pink';

// another <h1> that says “I’m in a div”

let insideh1 = document.createElement('h1')
insideh1.textContent = 'I am in a div!';

// a <p> that says “ME TOO!”

let insideP = document.createElement('p');
insideP.textContent = 'ME TOO!'

borderDiv.append(insideh1, insideP)
body.append(borderDiv)

