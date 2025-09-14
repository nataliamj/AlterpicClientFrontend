// src/modules/header/controller/HeaderController.ts
import { renderHeader, updateHeader, toggleUserMenu } from "../view/HeaderView";
import { HeaderModel } from "../model/HeaderModel";
import { AuthController } from "../../auth/controller/AuthContoller";
import { Router } from "../../../router";

export class HeaderController {
    private static instance: HeaderController;
    
    private constructor() {}

    public static getInstance(): HeaderController {
        if (!HeaderController.instance) {
            HeaderController.instance = new HeaderController();
        }
        return HeaderController.instance;
    }

    public init(): HTMLElement {
        const isAuthenticated = this.checkAuthentication();
        HeaderModel.setIsAuthenticated(isAuthenticated);
        
        const header = renderHeader(isAuthenticated);
        this.setupEventListeners(header);
        return header;
    }

    public updateHeader(): void {
        const isAuthenticated = this.checkAuthentication();
        HeaderModel.setIsAuthenticated(isAuthenticated);
        updateHeader(isAuthenticated);
        this.setupEventListeners();
    }

    private setupEventListeners(header?: HTMLElement): void {
        // Configurar botón del menú de usuario
        this.setupUserMenuButton(header);
        
        // Configurar clics fuera del menú
        this.setupOutsideClickHandler();
        
        // Configurar clics en el dropdown menu
        this.setupDropdownClickHandler(header);
    }

    private setupUserMenuButton(header?: HTMLElement): void {
        const userMenuButton = header ? header.querySelector('#user-menu-button') : document.querySelector('#user-menu-button');
        
        if (userMenuButton) {
            // Clonar y reemplazar para evitar duplicados de event listeners
            const newButton = userMenuButton.cloneNode(true) as HTMLElement;
            userMenuButton.parentNode?.replaceChild(newButton, userMenuButton);
            
            newButton.addEventListener('click', (e) => {
                e.stopPropagation();
                HeaderModel.toggleUserMenu();
                toggleUserMenu(HeaderModel.getUserMenuOpen());
            });
        }
    }

    private setupOutsideClickHandler(): void {
        const handler = () => {
            if (HeaderModel.getUserMenuOpen()) {
                HeaderModel.setUserMenuOpen(false);
                toggleUserMenu(false);
            }
        };
        
        document.removeEventListener('click', handler);
        document.addEventListener('click', handler);
    }

    private setupDropdownClickHandler(header?: HTMLElement): void {
        const handler = (e: Event) => {
            const target = e.target as HTMLElement;
            
            // Login
            if (target.id === 'login-btn' || target.closest('#login-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.handleMenuItemClick('/login');
                return;
            }
            
            // Register
            if (target.id === 'register-btn' || target.closest('#register-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.handleMenuItemClick('/register');
                return;
            }
            
            // Logout
            if (target.id === 'logout-btn' || target.closest('#logout-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.handleLogout();
                return;
            }
            
            // Account
            if (target.closest('a[data-route="/account"]')) {
                e.preventDefault();
                e.stopPropagation();
                this.handleMenuItemClick('/account');
                return;
            }
        };
        
        document.removeEventListener('click', handler);
        document.addEventListener('click', handler);
    }

    private handleMenuItemClick(route: string): void {
        HeaderModel.setUserMenuOpen(false);
        toggleUserMenu(false);
        Router.navigateTo(route);
    }

    private checkAuthentication(): boolean {
        return AuthController.getUser() !== null;
    }

    private async handleLogout(): Promise<void> {
        try {
            await AuthController.logout();
            HeaderModel.setIsAuthenticated(false);
            HeaderModel.setUserMenuOpen(false);
            this.updateHeader();
            Router.navigateTo('/');
        } catch (error) {
            console.error('Error durante el logout:', error);
        }
    }
}