// How to grab element by id
const titleEl = document.getElementById('title');

// how to grab element by CSS selector
const contentEl = document.querySelector('p.content');

// Ways to change the contents of an element
// titleEl.innerText = 'Todo list';

titleEl.innerHTML = 'Todo <span class="purple-text">List</span>';

// How to style elements via style roperty
contentEl.style.fontSize = '24px';
contentEl.style.border = 'dotted 2px green';

// How to access and modify attributes of elements
document
    .querySelector('a')
    .setAttribute('href', 'https://www.google.com');

// how to work with class list property
// console.log(contentEl.classList);

//adding classes
contentEl.classList.add('a-new-class', 'flex');

// Removing classess
contentEl.classList.remove('a-new-class', 'flex', 'cool');

// Toggling classes
contentEl.classList.toggle('paragraph');

// how to query for mutiple items
const liEls = document.querySelectorAll('ul.list > li');

liEls.forEach((li) => (li.style.fontSize = '36px'));


