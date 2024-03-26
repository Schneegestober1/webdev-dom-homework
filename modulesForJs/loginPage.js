import { login, token } from "./api.js";

// Логин пейдж логика 
export function logFunc() {
    const buttonLoginElement = document.getElementById('log-button');
    const loginInputElement = document.getElementById('login-input');
    const passwordInputElement = document.getElementById('password-input');

    buttonLoginElement.addEventListener('click', () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            console.log(token);
            token = responseData.user.token;
            console.log(token);
        })
    })

}