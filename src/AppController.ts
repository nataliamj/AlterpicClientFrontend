// src/AppController.ts
import { Router } from "./router";
import { initMenu } from "./modules/menu/Menu";
import { initHeader } from "./modules/header/Header";
// src/AppController.ts

    export class AppController {
    static start() {
        console.log("Iniciando aplicación...");
        
        // Inicializar header (fijo)
        this.initHeader();
        
        // Inicializar menú (fijo)
        this.initMenu();
        
        // Inicializar router
        Router.init();
    }

    static initHeader() {
        const headerContainer = initHeader();
        const app = document.getElementById('app');
        
        if (app) {
        // Asegurarse de que el header esté fijo en la parte superior
        headerContainer.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-20');
        app.appendChild(headerContainer);
        }
    }

    static initMenu() {
        const menuContainer = initMenu();
        const app = document.getElementById('app');
        
        if (app) {
        // Asegurarse de que el menú esté fijo a la izquierda
        menuContainer.classList.add('fixed', 'left-0', 'z-10');
        app.appendChild(menuContainer);
        
        // Añadir margen al contenido principal para evitar superposición
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        mainContent.className = 'ml-64 pt-14 min-h-screen';
        app.appendChild(mainContent);
        }
    }
    }