// src/modules/menu/Menu.ts
import { MenuController } from "./controller/MenuController";

export function initMenu(): HTMLElement {
    return MenuController.init();
}

