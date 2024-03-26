// Рендер-функция

export function renderComments({ comments, initLikeButtonListeners, reply, removeValidation, delay }) {
  const appElement = document.getElementById('app1');
  const commentsHtml = comments.map((comment, index) => {
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

  const appHtml = `   
        <div id="comments-block" class="comments-block">
    <ul id="list" class="comments">
     ${commentsHtml}
    </ul>
  </div>
  <div id="add-form" class="add-form">
    <input id="name-input" type="text" class="add-form-name" placeholder="Введите ваше имя" />
    <textarea id="comment-input" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
      rows="4"></textarea>
    <div class="add-form-row">
      <button id="add-button" class="add-form-button">Написать</button>
    </div>
    <div class="add-form-row">
      <button id="delete-button" class="add-form-button">Удалить последний комментарий</button>
    </div>
         </div>`;


  appElement.innerHTML = appHtml;

  const addButtonElement = document.getElementById('add-button');
  const nameInputElement = document.getElementById('name-input');
  const commentInputElement = document.getElementById('comment-input');

  // Добавление нового коммента на сервер 
  addButtonElement.addEventListener('click', () => {
    nameInputElement.classList.remove('error');
    commentInputElement.classList.remove('error');

    if (nameInputElement.value.trim() === '' || commentInputElement.value.trim() === '') {
      nameInputElement.classList.add('error');
      commentInputElement.classList.add('error');
      return;
    };

    addButtonElement.disabled = true;
    addButtonElement.textContent = 'Комментарий добавляется.....';

    postComment(

      { name: nameInputElement.value },
      { text: commentInputElement.value, }

    ).then(() => {

      return getComments();

    }).then(() => {

      addButtonElement.disabled = false;
      addButtonElement.textContent = 'Добавить';
      nameInputElement.value = '';
      commentInputElement.value = '';

    }).catch((error) => {

      if (error === 'Сервер сломался, попробуй позже') {

        alert('Сервер сломался, попробуй позже');

        addButtonElement.disabled = false;
        addButtonElement.textContent = 'Добавить';

      } else if (error === 'Имя и комментарий должны быть не короче 3 символов') {

        alert('Имя и комментарий должны быть не короче 3 символов');

        addButtonElement.disabled = false;
        addButtonElement.textContent = 'Добавить';

      };
    });
    renderComments({ comments, initLikeButtonListeners, reply, removeValidation, delay });
  });

  initLikeButtonListeners({ comments, renderComments, reply, removeValidation, delay });
  reply({ comments });
  removeValidation();
};



