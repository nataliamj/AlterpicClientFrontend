// src/modules/menu/model/MenuModel.ts
    export interface MenuItem {
    id: string;
    label: string;
    icon: string;
    route: string;
    requiresAuth: boolean;
    }

    export class MenuModel {
    private static menuItems: MenuItem[] = [
        {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'dashboard.png',
        route: '/dashboard',
        requiresAuth: true
        },
        {
        id: 'transform',
        label: 'Transformar imágenes',
        icon: 'transform.png',
        route: '/transform',
        requiresAuth: true
        },
        {
        id: 'history',
        label: 'Historial de actividad',
        icon: 'history.png',
        route: '/history',
        requiresAuth: true
        },
        {
        id: 'help',
        label: 'Ayuda / Soporte',
        icon: 'help.png',
        route: '/help',
        requiresAuth: false
        }
    ];

    static getMenuItems(isAuthenticated: boolean = false): MenuItem[] {
        return this.menuItems.filter(item => !item.requiresAuth || isAuthenticated);
    }

    static getMenuItemById(id: string): MenuItem | undefined {
        return this.menuItems.find(item => item.id === id);
    }
    }