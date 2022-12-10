const myList = document.querySelector('.myList');
const btn = document.querySelector('button');

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

// btn.addEventListener('click', function () {
//   console.log(ul);
//   const li = document.createElement('li');
//   li.textContent =
//     preliments[Math.floor(Math.random() * preliments.length)] +
//     ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
//   ul.appendChild(li);
// });

//https://medium.com/@clergemarvin/scrolling-event-in-javascript-c892f6b6bd9b
window.addEventListener('scroll', function () {
  const scrollOffset = window.pageYOffset;
  const totalAmountScrolled = scrollOffset + windowHeight;
  const documentHeight = document.body.clientHeight;
  console.log(totalAmountScrolled);
  //console.log(scroll.offsetTop);
  if (documentHeight - totalAmountScrolled <= 0) {
    const li = document.createElement('li');
    li.textContent =
      preliments[Math.floor(Math.random() * preliments.length)] +
      ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
    li.classList.add('items');
    myList.appendChild(li);
    // Load more content
  }
});

const li = document.querySelectorAll('li');
const selected = document.querySelector('.selected');
const items = document.querySelectorAll('.items');

// window.addEventListener('scroll', function () {
//   const scroll = window.scrollY;
//   for (var i = 0; i < li.length; i++) {
//     if (scroll > li[i].offsetTop - windowHeight * 0.55) {
//       for (i = 0; i < li.length; i++) {
//         li[i].classList.remove('selected');
//       }
//       li[i].classList.add('selected');
//     }
//   }
// });

const windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(function (listItem, i) {
    if (scroll > listItem.offsetTop - windowHeight * 0.55) {
      for (i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('selected');
      }
      listItem.classList.add('selected');
      //body.style.background = 'blue';
      //rainbow();
    }
  });
});
