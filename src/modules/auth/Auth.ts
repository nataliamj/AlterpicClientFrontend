// src/modules/auth/Auth.ts
import { renderLogin } from './view/LoginView';
import { renderRegister } from './view/RegisterView';
// src/modules/auth/Auth.ts
import { Router } from "../../router";

// En las funciones showLoginView y showRegisterView, asegúrate de usar Router.navigateTo
// en lugar de manipular directamente window.history

export function initAuthModule() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';
        app.appendChild(renderLogin());
    }
}

export function showRegisterView() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';
        app.appendChild(renderRegister());
    }
}

export function showLoginView() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';
        app.appendChild(renderLogin());
    }
}