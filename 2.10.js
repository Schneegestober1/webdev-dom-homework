"use strict";
const addButtonElement = document.getElementById('add-button');
const listElement = document.getElementById('list');
const nameInputElement = document.getElementById('name-input');
const commentInputElement = document.getElementById('comment-input');

fetch(
  'https://wedev-api.sky.pro/api/v1/rustam-kholov/comments',
  {
    method: "GET"
  }
).then((response) => {

  response.json().then((responseData)=> {

    const appComments = responseData.comments.map((comment) => {

      return {
        name: comment.author.name,
        date: new Date(comment.date).toLocaleDateString('ru-RU', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        comment: comment.text,
        likesCounter: comment.likes,
        isLiked: false,
      };
      
    });

    comments = appComments;

    console.log(comments);
    
    renderComments();
  });
});


let comments = [];

const renderComments = () => {
  const commentsHtml = comments.map((comment, index)=> {
  return `<li class="comment">
  <div class="comment-header">
    <div data-index="${index}">${comment.name}</div>
    <div>${comment.date}</div>
  </div>
  <div class="comment-body">
    <div data-index="${index}" class="comment-text">
      ${comment.comment}
    </div>
  </div>
  <div class="comment-footer">
    <div class="likes">
      <span id="likes" class="likes-counter">${comment.likesCounter}</span>
      <button id="button-like" data-like="${comment.likesCounter}" data-index="${index}" class="like-button ${comments[index].isLiked ? '-active-like' : ''}"></button>
    </div>
  </div>
  </li>`
  }).join('');
  listElement.innerHTML = commentsHtml;

  initLikeButtonListeners();
  reply();
};



const initLikeButtonListeners = () => {
  const addLikesButtonsElements = document.querySelectorAll('.like-button');

  for (const addLikesButtonsElement of addLikesButtonsElements) {

    const index = addLikesButtonsElement.dataset.index;
    const counter = addLikesButtonsElement.dataset.like;

    addLikesButtonsElement.addEventListener('click', () => {

      if (comments[index].isLiked === false) {
        
        const result = Number(counter) + 1;
        comments[index].likesCounter = result;

        comments[index].isLiked = true;

      } else { 
        
        const result = Number(counter) - 1;
        comments[index].likesCounter = result;

        comments[index].isLiked = false;
      }

      renderComments();
    })
  }
};

renderComments();

function reply() {

  const commentElements = document.querySelectorAll('.comment-body');
  const formTextElement = document.querySelector('.add-form-text');

  commentElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      formTextElement.value = `> ${comments[index].name} \n ${comments[index].comment}`;
    });
  });
}

reply();

function removeValidation() {

  nameInputElement.addEventListener('click', ()=> {
    nameInputElement.classList.remove('error')
  });
  
  commentInputElement.addEventListener('click', ()=> {
    commentInputElement.classList.remove('error')
  });
};

removeValidation();

addButtonElement.addEventListener('click', () => {
  nameInputElement.classList.remove('error');
  commentInputElement.classList.remove('error');

  if (nameInputElement.value.trim() === '' || commentInputElement.value.trim() === '') {
    nameInputElement.classList.add('error');
    commentInputElement.classList.add('error');
    return;
  };

  // const date = new Date();
  // const options = {
  //   year: '2-digit',
  //   month: 'numeric',
  //   day: 'numeric',
  // };
  // const optionsTime = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  // };
  // const dateTime = `${date.toLocaleDateString('ru-RU', options)}
  // ${date.toLocaleTimeString('ru-RU', optionsTime)}`;

 
  // comments.push({
  //   name: nameInputElement.value
  //   .replaceAll("&", "&amp;")
  //   .replaceAll("<", "&lt;")
  //   .replaceAll(">", "&gt;")
  //   .replaceAll('"', "&quot;"),
  //   date: dateTime,
  //   comment: commentInputElement.value
  //   .replaceAll("&", "&amp;")
  //   .replaceAll("<", "&lt;")
  //   .replaceAll(">", "&gt;")
  //   .replaceAll('"', "&quot;"),
  //   likesCounter: 0,
  //   isLiked: false,
  // });

  fetch(
    'https://wedev-api.sky.pro/api/v1/rustam-kholov/comments',
    {
      method: "POST",
      body: JSON.stringify( {
        name: nameInputElement.value,
        text: commentInputElement.value,
      })
    }
  ).then((response) => {
  
    response.json().then((responseData)=> {
  
      const appComments = responseData.comments.map((comment) => {
  
        return {
          name: comment.author.name,
          date: new Date(comment.date).toLocaleDateString('ru-RU', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          comment: comment.text,
          likesCounter: comment.likes,
          isLiked: false,
        };
      });
  
      comments = appComments;
      renderComments();
    });
  });


  renderComments();
  
  nameInputElement.value = '';
  commentInputElement.value = '';
});