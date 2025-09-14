// src/modules/menu/controller/MenuController.ts
import { renderMenu } from "../view/MenuView";
import { AuthController } from "../../auth/controller//AuthContoller"; // Corregido: AuthController
import { Router } from "../../../router";

export class MenuController {
    static init(): HTMLElement {
        const menu = renderMenu();
        this.setupEventListeners(menu);
        return menu;
    }

    static setupEventListeners(menu: HTMLElement): void {
        // Navegación del menú principal
        menu.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            
            // Navegación por items del menú
            const menuLink = target.closest('a[data-route]');
            if (menuLink) {
                e.preventDefault();
                const route = menuLink.getAttribute('data-route')!;
                Router.navigateTo(route);
            }
        });
    }
}