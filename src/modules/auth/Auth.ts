import { renderLogin } from './view/LoginView'

export function initAuthModule() {
    const app = document.getElementById('app')
    if (app) {
        app.innerHTML = ''
        app.appendChild(renderLogin())
    }
}