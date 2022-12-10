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
  'Truthfully',
  'Viciously',
  'Incredibly',
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

//creating the initial 5 listitems upon buttonclick.
cheerButton.addEventListener('click', function () {
  body.classList.add('rainbow');
  const header = document.createElement('h2');
  header.textContent = 'You are: ';
  myList.prepend(header);
  for (i = 0; i < 5; i++) {
    const li = document.createElement('li');
    console.log('element created');
    li.textContent =
      preliments[Math.floor(Math.random() * preliments.length)] +
      ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
    myList.appendChild(li);
  }
  cheerButton.classList.add('hide');
});

const rainbow = window.setInterval(function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  root.style.setProperty('--rainbow', randomColor);
}, 2000);

// function rainbow() {
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   root.style.setProperty('--rainbow', randomColor);
// }

const windowHeight = window.innerHeight;
//https://medium.com/@clergemarvin/scrolling-event-in-javascript-c892f6b6bd9b
window.addEventListener('scroll', function () {
  const scrollOffset = window.pageYOffset;
  const totalAmountScrolled = scrollOffset + windowHeight;
  const documentHeight = document.body.clientHeight;
  console.log(documentHeight);
  //console.log(scroll.offsetTop);
  if (documentHeight - totalAmountScrolled <= documentHeight * 0.25) {
    const li = document.createElement('li');
    console.log('element created');
    li.textContent =
      preliments[Math.floor(Math.random() * preliments.length)] +
      ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
    myList.appendChild(li);
  }
});

window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(function (listItem, i) {
    if (scroll > listItem.offsetTop - windowHeight * 0.55) {
      for (i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('selected');
      }
      listItem.classList.add('selected');
    }
  });
});
