const body = document.querySelector('body');
const myList = document.querySelector('.myList');
const root = document.querySelector(':root');
const cheerButton = document.querySelector('.cheer-button');

const compliments = [
  'Nice',
  'Fun',
  'Interesting',
  'Smart',
  'Beautiful',
  'Kind',
  'Structured',
  'Amazing',
  'Social',
  'Diplomatic',
  'Empathic',
  'Sexy',
  'Fabulous',
  'Awesome',
  'Sophisticated',
  'Fantastic',
  'Cool',
  'Tough',
  'Affectionate',
  'Adventurous',
  'Compassionate',
  'Courageous',
  'Generous',
  'Reliable',
  'Resourceful',
];

const preliments = [
  'Absurdly',
  'Amazingly',
  'Profoundly',
  'Abnormally',
  'Beautifully',
  'Clearly',
  'Majestically',
  'Unbelievably',
  'Neatly',
  'Properly',
  'Rediculously',
  'Truly',
  'Aggressively',
  'Insanely',
  'Incredibly',
  'Remarkably',
  'Undoubtedly',
  'Fantastically',
  'Immensely',
  'Magically',
];

const colors = [
  'hotpink',
  'rgb(255, 127, 208)',
  'rgb(29, 141, 44)',
  'rgb(181, 86, 35)',
  'rgb(181, 35, 159)',
  'rgb(89, 79, 226)',
  'rgb(13, 226, 91)',
  'rgb(226, 13, 13)',
  'rgb(13, 118, 62)',
  'blue',
];

// Function appending five listelements to myList, randoming their textcontent from preliments and compliments array.
function addFive() {
  for (i = 0; i < 5; i++) {
    const li = document.createElement('li');
    console.log('element created');
    li.textContent =
      preliments[Math.floor(Math.random() * preliments.length)] +
      ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
    myList.appendChild(li);
  }
}

function cheerButtonClicked() {
  body.classList.add('rainbow');
  const headerPtTwo = document.createElement('h2');
  headerPtTwo.textContent = 'You are:';
  myList.prepend(headerPtTwo);
  const header = document.createElement('h2');
  header.textContent = 'Hang in there champion!';
  myList.prepend(header);
  body.classList.add('heart-cursor');
  addFive();
  cheerButton.classList.add('hide');
  const music = document.querySelector('audio');
  music.play();
}

function endlessScrollable () {
  const html = document.documentElement;
  //getting the document height, reference: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  //if the windowheight+scrolled amount equals 85% or more of the documents total height, addFive is called.
  if (windowHeight + scrollY >= 0.85 * documentHeight) {
    addFive();
  }
}

function removeListItems() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(function (listItem, i) {
    if (scrollY > listItem.offsetTop - windowHeight * 0.59) {
      for (i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('selected');
      }
      listItem.classList.add('selected');
    }
  });
}

//When button is clicked - Adds the classes rainbow(backgroundcolor) and heart-cursor to body. Creates the 5 initial listitems along with two headers. Hides button by adding class hide containing a display:none. Plays audio which is set to loop.
cheerButton.addEventListener('click', cheerButtonClicked);

//Changing the color of the css variable --rainbow. A color is randomed and applied from the colors array every 2seconds.
const rainbow = window.setInterval(function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  root.style.setProperty('--rainbow', randomColor);
}, 2000);

//Making the page endlessly scrollable.
window.addEventListener('scroll', endlessScrollable);

//checking where in the browser each of the listitems are located, if an item is 59% from the top, applying class selected and removing it from the other listitems.
window.addEventListener('scroll', removeListItems);
