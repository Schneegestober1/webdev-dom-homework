import { login, setToken } from "./api.js";

// // Рендер-логин функция

export const renderLogin = ({getComments}) => {
    const appElement = document.getElementById('app0');

    const loginHtml =
        `<div id="app" class="add-form login-form">
    <div class="add-form-log">
        <h3>Форма входа</h3>
    </div>
    <div class="add-form-log">
        <input type="text" id="login-input" class="add-form-name add-form-name-login" placeholder="Логин" />
    </div>
    <div class="add-form-log">
        <input type="password" id="password-input" class="add-form-name add-form-name-password"
            placeholder="Пароль" />
    </div>
    <div class="add-form-row add-form-row-login">
        <button id="log-button" class="add-form-button add-form-button-log">Войти</button>
    </div>
    <div class="add-form-link">
        <a href="#" class="add-form-link">Зарегистрироваться</a>
    </div>
        </div>`;
    appElement.innerHTML = loginHtml;

    const buttonLoginElement = document.getElementById('log-button');
    const loginInputElement = document.getElementById('login-input');
    const passwordInputElement = document.getElementById('password-input');

    buttonLoginElement.addEventListener('click', () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            console.log(responseData);
            setToken(responseData.user.token);
            appElement.classList.add('hide');
        }).then(() => {
            getComments();
        });
        loginInputElement.value = '';
        passwordInputElement.value = '';
    });
}





