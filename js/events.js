const btn = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

btn.addEventListener('click', function(){
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
    newCommentEl.innerText = commentText;
    console.log(newCommentEl);
    ulEl.append(newCommentEl);
    inputEl.value = '';
});

ulEl.addEventListener('click', function(evt){
    evt.target.style.border = 'dashed 2px red';
})


