const listItems = document.querySelectorAll('ul li');
const list = document.querySelector('ul');
const body = document.querySelector('body');
const selected = document.querySelector('.selected');

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
  'Shiny',
  'Fantastic',
  'Cool',
  'Down with the kids',
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

body.addEventListener('click', function () {
  listItems.forEach(function (listItem, i) {
    listItem.textContent =
      preliments[Math.floor(Math.random() * preliments.length)] +
      ` ${compliments[Math.floor(Math.random() * compliments.length)]}`;
  });
});

const windowHeight = window.innerHeight;
// window.addEventListener('scroll', function () {
//   const scroll = window.scrollY;
//   if (scroll > tester.offsetTop - windowHeight * 0.5) {
//     body.classList.add('blue');
//   } else {
//     body.classList.remove('blue');
//   }
// });

window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  listItems.forEach(function (listItem, i) {
    if (scroll > listItem.offsetTop - windowHeight * 0.55) {
      for (i = 0; i < list.children.length; i++) {
        list.children[i].classList.remove('selected');
      }
      listItem.classList.add('selected');
      body.style.background = 'blue';
    }
  });
});

// selected.addEventListener('scroll', function () {
//   const scrollposs = selected.scrollTop;
//   console.log(scrollposs);
// });

// window.addEventListener('scroll', function () {
//   console.log(window.pageYOffset);
// });

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.documentElement.scrollTop > window.height / 2) {
//     document.getElementById("").className = "test";
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }
/*working ex

body.addEventListener('click', function () {
  listItems.forEach(function (listItem, i) {
    listItem.textContent =
      compliments[Math.floor(Math.random() * compliments.length)];
  });
  listItems[1].textContent += ` ${
    compliments[Math.floor(Math.random() * compliments.length)]
  }`;
});
*/

/*
element.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });

  const randomElement = array[Math.floor(Math.random() * array.length)];




body.addEventListener('scroll', function () {
  const scrollTop = body.scrollTop;
  listItems.forEach(function (listItem, i) {
    if (listItem.offsetTop < scrollTop + body.offsetHeight / 2) {
      list.children[i].classList.add('selected');
    }
  });
});


/*
//inspo: https://www.youtube.com/watch?v=FDCiM6JoPao&t=47s
// https://stackoverflow.com/questions/2481350/how-can-i-get-the-scrollbar-position-with-javascript

const items = document.querySelectorAll('.items');
const scrollMenu = document.querySelector('.scrollmenu');
const indicators = document.querySelector('.indicators');

//removing the class .selected from all li elements when called.
function removeSelected() {
  for (i = 0; i < indicators.children.length; i++) {
    indicators.children[i].classList.remove('selected');
  }
}

//adding eventlistener for the scrollMenu window.
scrollMenu.addEventListener('scroll', function () {
  const scrollLeft = scrollMenu.scrollLeft;
  //for each item, if their left side pos is less than half of the scrollmenus width away from the left side, the .selected class is removed from all li elements and added only to the item meeting those conditions.
  items.forEach(function (item, i) {
    if (
      //offsetLeft property returns the left position (in pixels) relative to the parent.
      //offsetWidth returns the layout width of an element as an integer.
      //scrollLeft gets the number of pixels that an element's content is scrolled from its left edge.
      item.offsetLeft <
      scrollLeft + scrollMenu.offsetWidth / 2
    ) {
      removeSelected();
      indicators.children[i].classList.add('selected');
    }
  });
});
*/
