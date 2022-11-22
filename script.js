const listItems = document.querySelectorAll('ul li');
const list = document.querySelector('ul');
const body = document.querySelector('body');

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
  'Twinkly',
  'Shiny',
  'Superstar',
  'Cool',
  'Down with the kids',
];

body.addEventListener('click', function () {
  listItems.forEach(function (listItem, i) {
    listItem.textContent =
      compliments[Math.floor(Math.random() * compliments.length)];
  });
  listItems[1].textContent += ` ${
    compliments[Math.floor(Math.random() * compliments.length)]
  }`;
});

/*
element.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });

  const randomElement = array[Math.floor(Math.random() * array.length)];




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
