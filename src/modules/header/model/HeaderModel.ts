// src/modules/header/model/HeaderModel.ts
export class HeaderModel {
    private static state = {
        isAuthenticated: false,
        userMenuOpen: false
    };

    static setIsAuthenticated(isAuthenticated: boolean): void {
        this.state.isAuthenticated = isAuthenticated;
    }

    static getIsAuthenticated(): boolean {
        return this.state.isAuthenticated;
    }

    static setUserMenuOpen(isOpen: boolean): void {
        this.state.userMenuOpen = isOpen;
    }

    static getUserMenuOpen(): boolean {
        return this.state.userMenuOpen;
    }

    static toggleUserMenu(): void {
        this.state.userMenuOpen = !this.state.userMenuOpen;
    }
}