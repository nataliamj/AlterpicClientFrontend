// src/modules/header/Header.ts
import { HeaderController } from "./controller/HeaderController";

// Crear una instancia del controlador
const headerController = HeaderController.getInstance();

export function initHeader(): HTMLElement {
    return headerController.init();
}

export function updateHeader(): void {
    headerController.updateHeader();
} // <- AQUÍ TERMINA EL ARCHIVO, no debe haber más código