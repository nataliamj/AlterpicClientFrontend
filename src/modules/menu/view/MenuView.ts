// src/modules/menu/view/MenuView.ts
export function renderMenu(): HTMLElement {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    
    menuContainer.innerHTML = `
        <!-- App Section -->
        <div class="mb-2">
            <h2 class="menu-section-title">MENU</h2>
            <ul id="app-section-items">
                <li>
                    <a href="#" data-route="/dashboard" class="menu-item">
                        <span class="w-6 h-6 flex items-center justify-center">
                            <img src="/assets/images/dashboard.png" alt="Dashboard" class="w-5 h-5">
                        </span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" data-route="/transform" class="menu-item">
                        <span class="w-6 h-6 flex items-center justify-center">
                            <img src="/assets/images/transform.png" alt="Transformar imágenes" class="w-5 h-5">
                        </span>
                        <span>Transformar imágenes</span>
                    </a>
                </li>
                <li>
                    <a href="#" data-route="/history" class="menu-item">
                        <span class="w-6 h-6 flex items-center justify-center">
                            <img src="/assets/images/history.png" alt="Historial" class="w-5 h-5">
                        </span>
                        <span>Historial de actividad</span>
                    </a>
                </li>
                <li>
                    <a href="#" data-route="/tutorial" class="menu-item">
                        <span class="w-6 h-6 flex items-center justify-center">
                            <img src="/assets/images/tutorial.png" alt="Tutorial" class="w-5 h-5">
                        </span>
                        <span>Tutorial</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <!-- Divisor -->
        <div class="menu-divider"></div>
    `;

    return menuContainer;
}