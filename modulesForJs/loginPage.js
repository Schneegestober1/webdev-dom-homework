import { login, setName, setToken } from "./api.js";

// // Рендер-логин функция

export const renderLogin = ({getComments}) => {
    const appElement = document.getElementById('app');

    const loginHtml =
    `<div id="logg-form" class="add-form login-form">
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
    </div>`;

    appElement.innerHTML = loginHtml;

    const buttonLoginElement = document.getElementById('log-button');
    const loginInputElement = document.getElementById('login-input');
    const passwordInputElement = document.getElementById('password-input');

    buttonLoginElement.addEventListener('click', () => {
        const logValue = loginInputElement.value.trim();
        const passValue = passwordInputElement.value.trim();
        if (logValue === '' || passValue === '') {
            return alert('Заполните все поля');
        }

        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            if (responseData && responseData.user) {
            setToken(responseData.user.token);
            setName(responseData.user.name);
            getComments();
            } else {
                console.error('Неверный логин или пароль');
                alert('Неверный логин или пароль');
            }
        });
        loginInputElement.value = '';
        passwordInputElement.value = '';
    });
}





