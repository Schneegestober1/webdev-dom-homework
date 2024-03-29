/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var _modulesForJs_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulesForJs/api.js */ \"./modulesForJs/api.js\");\n/* harmony import */ var _modulesForJs_delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulesForJs/delay.js */ \"./modulesForJs/delay.js\");\n/* harmony import */ var _modulesForJs_likeButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulesForJs/likeButton.js */ \"./modulesForJs/likeButton.js\");\n/* harmony import */ var _modulesForJs_removeValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulesForJs/removeValid.js */ \"./modulesForJs/removeValid.js\");\n/* harmony import */ var _modulesForJs_renderComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulesForJs/renderComments.js */ \"./modulesForJs/renderComments.js\");\n/* harmony import */ var _modulesForJs_reply_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulesForJs/reply.js */ \"./modulesForJs/reply.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Получениe комментов с сервера\r\nfunction getComments() {\r\n\r\n  (0,_modulesForJs_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchAndRenderComments)().then((responseData) => {\r\n    const appComments = responseData.comments.map((comment) => {\r\n      return {\r\n        name: comment.author.name,\r\n        date: new Date(comment.date).toLocaleDateString('ru-RU', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),\r\n        comment: comment.text,\r\n        likesCounter: comment.likes,\r\n        isLiked: comment.isLiked,\r\n      };\r\n    });\r\n    comments = appComments;\r\n    (0,_modulesForJs_renderComments_js__WEBPACK_IMPORTED_MODULE_4__.renderComments)({ comments, initLikeButtonListeners: _modulesForJs_likeButton_js__WEBPACK_IMPORTED_MODULE_2__.initLikeButtonListeners, reply: _modulesForJs_reply_js__WEBPACK_IMPORTED_MODULE_5__.reply, removeValidation: _modulesForJs_removeValid_js__WEBPACK_IMPORTED_MODULE_3__.removeValidation, delay: _modulesForJs_delay_js__WEBPACK_IMPORTED_MODULE_1__.delay });\r\n    // preLoadElement.classList.add('hide');\r\n  });\r\n}\r\n\r\ngetComments();\r\n// renderLogin({ getComments });\r\n\r\n\r\n\r\n//  Массив для комментов \r\nlet comments = [];\r\n\r\n// Кнопка для лайка \r\n(0,_modulesForJs_likeButton_js__WEBPACK_IMPORTED_MODULE_2__.initLikeButtonListeners)({ comments }, { renderComments: _modulesForJs_renderComments_js__WEBPACK_IMPORTED_MODULE_4__.renderComments });\r\n\r\n// Ответ по клику на коммент \r\n(0,_modulesForJs_reply_js__WEBPACK_IMPORTED_MODULE_5__.reply)({ comments });\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./main.js?");

/***/ }),

/***/ "./modulesForJs/api.js":
/*!*****************************!*\
  !*** ./modulesForJs/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAndRenderComments: () => (/* binding */ fetchAndRenderComments),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   postComment: () => (/* binding */ postComment),\n/* harmony export */   setName: () => (/* binding */ setName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\n// Получениe комментов с сервера (часть кода)\r\n\r\nconst host = 'https://wedev-api.sky.pro/api/v2/rustam-kholov/comments';\r\nconst userUrl = 'https://wedev-api.sky.pro/api/user/login';\r\n\r\nlet token;\r\nlet name;\r\n\r\n\r\nconst setToken = (newToken) => {\r\n    token = newToken;\r\n};\r\n\r\nconst setName = (newName) => {\r\n    name = newName;\r\n};\r\n\r\nfunction fetchAndRenderComments() {\r\n\r\n    return fetch(\r\n\r\n        host,\r\n\r\n        {\r\n            method: \"GET\",\r\n        },\r\n\r\n\r\n    ).then((response) => {\r\n\r\n        if (response.status === 500) {\r\n\r\n            return Promise.reject('Сервер сломался, попробуй позже');\r\n\r\n        } else {\r\n\r\n            return response.json();\r\n\r\n        }\r\n    }).catch((err) => {\r\n\r\n        if (err.message === 'Сервер сломался, попробуй позже') {\r\n\r\n            return alert('Сервер сломался, попробуй позже')\r\n\r\n        } else if (err.message === 'Failed to fetch') {\r\n\r\n            return alert('Кажется, у вас сломался интернет, попробуйте позже')\r\n        };\r\n    });\r\n};\r\n\r\n\r\n\r\nfunction postComment({ name }, { text }) {\r\n    return fetch(\r\n        host,\r\n        {\r\n            method: \"POST\",\r\n            body: JSON.stringify({\r\n                name: name\r\n                    .replaceAll(\"&\", \"&amp;\")\r\n                    .replaceAll(\"<\", \"&lt;\")\r\n                    .replaceAll(\">\", \"&gt;\")\r\n                    .replaceAll('\"', \"&quot;\"),\r\n                text: text\r\n                    .replaceAll(\"&\", \"&amp;\")\r\n                    .replaceAll(\"<\", \"&lt;\")\r\n                    .replaceAll(\">\", \"&gt;\")\r\n                    .replaceAll('\"', \"&quot;\"),\r\n            }),\r\n            headers: {\r\n                Authorization: `Bearer ${token}`,\r\n            },\r\n        }).catch(() => {\r\n\r\n            alert('Кажется, у вас сломался интернет, попробуйте позже');\r\n            addButtonElement.disabled = false;\r\n            addButtonElement.textContent = 'Добавить';\r\n\r\n        }).then((response) => {\r\n\r\n            if (response.status === 500) {\r\n\r\n                return Promise.reject('Сервер сломался, попробуй позже');\r\n\r\n            } else if (response.status === 400) {\r\n\r\n                return Promise.reject('Имя и комментарий должны быть не короче 3 символов');\r\n\r\n            } else {\r\n                \r\n                return response.json();\r\n\r\n            }\r\n        });\r\n};\r\n\r\n\r\nfunction login({ login, password }) {\r\n\r\n    return fetch(userUrl, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n        }),\r\n    }).then((response) => {\r\n\r\n        return response.json();\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/api.js?");

/***/ }),

/***/ "./modulesForJs/delay.js":
/*!*******************************!*\
  !*** ./modulesForJs/delay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delay: () => (/* binding */ delay)\n/* harmony export */ });\n// Отложенный коммент\r\n\r\nfunction delay(interval = 300) {\r\n    return new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve();\r\n      }, interval);\r\n    });\r\n  };\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/delay.js?");

/***/ }),

/***/ "./modulesForJs/likeButton.js":
/*!************************************!*\
  !*** ./modulesForJs/likeButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLikeButtonListeners: () => (/* binding */ initLikeButtonListeners)\n/* harmony export */ });\n// Кнопка для лайка \r\n\r\nfunction initLikeButtonListeners({ comments, renderComments, reply, removeValidation, delay }) {\r\n\r\n    const addLikesButtonsElements = document.querySelectorAll('.like-button');\r\n\r\n\r\n    for (const addLikesButtonsElement of addLikesButtonsElements) {\r\n\r\n        const index = addLikesButtonsElement.dataset.index;\r\n        const counter = addLikesButtonsElement.dataset.like;\r\n\r\n        addLikesButtonsElement.addEventListener('click', () => {\r\n\r\n            addLikesButtonsElement.classList.add('-loading-like')\r\n\r\n            delay(4000).then(() => {\r\n\r\n                if (comments[index].isLiked === false) {\r\n\r\n                    const result = Number(counter) + 1;\r\n                    comments[index].likesCounter = result;\r\n\r\n                    comments[index].isLiked = true;\r\n\r\n                } else {\r\n\r\n                    if (comments[index].likesCounter === 0) {\r\n\r\n                        comments[index].likesCounter = 0;\r\n\r\n                        comments[index].isLiked = false;\r\n\r\n                    } else {\r\n\r\n                        comments[index].likesCounter = Math.max(0, comments[index].likesCounter - 1);\r\n\r\n                        comments[index].isLiked = false;\r\n                    };\r\n                };\r\n                renderComments({ comments, initLikeButtonListeners, reply, removeValidation, delay });\r\n            });\r\n        });\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/likeButton.js?");

/***/ }),

/***/ "./modulesForJs/loginPage.js":
/*!***********************************!*\
  !*** ./modulesForJs/loginPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./modulesForJs/api.js\");\n\r\n\r\n// // Рендер-логин функция\r\n\r\nconst renderLogin = ({getComments}) => {\r\n    const appElement = document.getElementById('app');\r\n\r\n    const loginHtml =\r\n    `<div id=\"logg-form\" class=\"add-form login-form\">\r\n    <div class=\"add-form-log\">\r\n        <h3>Форма входа</h3>\r\n    </div>\r\n    <div class=\"add-form-log\">\r\n        <input type=\"text\" id=\"login-input\" class=\"add-form-name add-form-name-login\" placeholder=\"Логин\" />\r\n    </div>\r\n    <div class=\"add-form-log\">\r\n        <input type=\"password\" id=\"password-input\" class=\"add-form-name add-form-name-password\"\r\n            placeholder=\"Пароль\" />\r\n    </div>\r\n    <div class=\"add-form-row add-form-row-login\">\r\n        <button id=\"log-button\" class=\"add-form-button add-form-button-log\">Войти</button>\r\n    </div>\r\n    <div class=\"add-form-link\">\r\n        <a href=\"#\" class=\"add-form-link\">Зарегистрироваться</a>\r\n    </div>\r\n    </div>`;\r\n\r\n    appElement.innerHTML = loginHtml;\r\n\r\n    const buttonLoginElement = document.getElementById('log-button');\r\n    const loginInputElement = document.getElementById('login-input');\r\n    const passwordInputElement = document.getElementById('password-input');\r\n\r\n    buttonLoginElement.addEventListener('click', () => {\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\r\n            login: loginInputElement.value,\r\n            password: passwordInputElement.value,\r\n        }).then((responseData) => {\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setName)(responseData.user.name);\r\n            getComments();\r\n        });\r\n        loginInputElement.value = '';\r\n        passwordInputElement.value = '';\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/loginPage.js?");

/***/ }),

/***/ "./modulesForJs/removeValid.js":
/*!*************************************!*\
  !*** ./modulesForJs/removeValid.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeValidation: () => (/* binding */ removeValidation)\n/* harmony export */ });\n// Отмена валидации (чтобы не было красных полей)\r\n\r\n\r\nfunction removeValidation() {\r\n\r\n    const nameInputElement = document.getElementById('name-input');\r\n    const commentInputElement = document.getElementById('comment-input');\r\n\r\n    nameInputElement.addEventListener('click', () => {\r\n        nameInputElement.classList.remove('error');\r\n        commentInputElement.classList.remove('error');\r\n    });\r\n    commentInputElement.addEventListener('click', () => {\r\n        nameInputElement.classList.remove('error');\r\n        commentInputElement.classList.remove('error');\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/removeValid.js?");

/***/ }),

/***/ "./modulesForJs/renderComments.js":
/*!****************************************!*\
  !*** ./modulesForJs/renderComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./modulesForJs/api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ \"./main.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage.js */ \"./modulesForJs/loginPage.js\");\n// Рендер-функция\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderComments({ comments, initLikeButtonListeners, reply, removeValidation, delay }) {\r\n  const appElement = document.getElementById('app');\r\n  const commentsHtml = comments.map((comment, index) => {\r\n    return `<li class=\"comment\">\r\n    <div class=\"comment-header\">\r\n      <div data-index=\"${index}\">${comment.name}</div>\r\n      <div>${comment.date}</div>\r\n    </div>\r\n    <div class=\"comment-body\">\r\n      <div data-index=\"${index}\" class=\"comment-text\">\r\n        ${comment.comment}\r\n      </div>\r\n    </div>\r\n    <div class=\"comment-footer\">\r\n      <div class=\"likes\">\r\n        <span id=\"likes\" class=\"likes-counter\">${comment.likesCounter}</span>\r\n        <button id=\"button-like\" data-like=\"${comment.likesCounter}\" data-index=\"${index}\" class=\"like-button ${comments[index].isLiked ? '-active-like' : ''}\"></button>\r\n      </div>\r\n    </div>\r\n    </li>`\r\n  }).join('');\r\n\r\n  let appHtml = '';\r\n\r\n  if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n\r\n    appHtml = `\r\n    <ul id=\"list\" class=\"comments\">\r\n     ${commentsHtml}\r\n    </ul>\r\n    <div id=\"add-form\" class=\"add-form\">\r\n    <input id=\"name-input\" type=\"text\" class=\"add-form-name\" value=${_api_js__WEBPACK_IMPORTED_MODULE_0__.name} disabled id=\"name-input\" readonly/>\r\n    <textarea id=\"comment-input\" type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\"\r\n      rows=\"4\"></textarea>\r\n    <div class=\"add-form-row\">\r\n      <button id=\"add-button\" class=\"add-form-button\">Написать</button>\r\n    </div>\r\n    <div class=\"add-form-row\">\r\n      <button id=\"delete-button\" class=\"add-form-button\">Удалить последний комментарий</button>\r\n    </div>\r\n  </div>`;\r\n\r\n  } else {\r\n\r\n    appHtml = `   \r\n  <div id=\"comments-block\" class=\"comments-block\">\r\n    <ul id=\"list\" class=\"comments\">\r\n     ${commentsHtml}\r\n    </ul>\r\n    <span class=\"auth-link-span\" id=\"load-comment\">Чтобы добавить комментарий, \r\n    <a href=\"#\" id=\"log\">авторизуйтесь</a>\r\n    </span>\r\n  </div>`\r\n\r\n  }\r\n\r\n  appElement.innerHTML = appHtml;\r\n\r\n\r\n  if(!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n    \r\n    const logButtonElement = document.getElementById('log');\r\n    logButtonElement.addEventListener('click', () => {\r\n      (0,_loginPage_js__WEBPACK_IMPORTED_MODULE_2__.renderLogin)({getComments: _main_js__WEBPACK_IMPORTED_MODULE_1__.getComments});\r\n    });\r\n\r\n  } else {\r\n\r\n    const addButtonElement = document.getElementById('add-button');\r\n    const nameInputElement = document.getElementById('name-input');\r\n    const commentInputElement = document.getElementById('comment-input');\r\n\r\n    // Добавление нового коммента на сервер \r\n    addButtonElement.addEventListener('click', () => {\r\n      nameInputElement.classList.remove('error');\r\n      commentInputElement.classList.remove('error');\r\n\r\n      if (nameInputElement.value.trim() === '' || commentInputElement.value.trim() === '') {\r\n        nameInputElement.classList.add('error');\r\n        commentInputElement.classList.add('error');\r\n        return;\r\n      };\r\n\r\n      addButtonElement.disabled = true;\r\n      addButtonElement.textContent = 'Комментарий добавляется.....';\r\n\r\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(\r\n\r\n        { name: nameInputElement.value },\r\n        { text: commentInputElement.value, }\r\n\r\n      ).then(() => {\r\n\r\n        return (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.getComments)();\r\n\r\n      }).then(() => {\r\n\r\n        addButtonElement.disabled = false;\r\n        addButtonElement.textContent = 'Добавить';\r\n        nameInputElement.value = '';\r\n        commentInputElement.value = '';\r\n\r\n      }).catch((error) => {\r\n\r\n        if (error === 'Сервер сломался, попробуй позже') {\r\n\r\n          alert('Сервер сломался, попробуй позже');\r\n\r\n          addButtonElement.disabled = false;\r\n          addButtonElement.textContent = 'Добавить';\r\n\r\n        } else if (error === 'Имя и комментарий должны быть не короче 3 символов') {\r\n\r\n          alert('Имя и комментарий должны быть не короче 3 символов');\r\n\r\n          addButtonElement.disabled = false;\r\n          addButtonElement.textContent = 'Добавить';\r\n\r\n        };\r\n        renderComments({ comments, initLikeButtonListeners, reply, removeValidation, delay, getComments: _main_js__WEBPACK_IMPORTED_MODULE_1__.getComments });\r\n      });\r\n      \r\n    });\r\n\r\n    initLikeButtonListeners({ comments, renderComments, reply, removeValidation, delay });\r\n    reply({ comments });\r\n    removeValidation();\r\n  };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/renderComments.js?");

/***/ }),

/***/ "./modulesForJs/reply.js":
/*!*******************************!*\
  !*** ./modulesForJs/reply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reply: () => (/* binding */ reply)\n/* harmony export */ });\n// Ответ по клику на коммент \r\n\r\nfunction reply({comments}) {\r\n\r\n    const commentElements = document.querySelectorAll('.comment-body');\r\n    const formTextElement = document.querySelector('.add-form-text');\r\n\r\n    commentElements.forEach((element, index) => {\r\n        element.addEventListener('click', () => {\r\n            formTextElement.value = `> ${comments[index].name} \\n ${comments[index].comment}`;\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack://webdev-dom-homework/./modulesForJs/reply.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;