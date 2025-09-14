// src/modules/menu/view/MenuView.ts
export function renderMenu(): HTMLElement {
    const menuContainer = document.createElement("div");
    menuContainer.className = "w-64 menu-bg min-h-screen text-gray-800 p-4 fixed left-0 z-10 pt-16"; // pt-16 para dejar espacio para el header
    
    menuContainer.innerHTML = `
        
        
        <!-- App Section -->
        <div class="mb-6">
            <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3">APP SECTION</h2>
            <ul id="app-section-items" class="space-y-1">
                <li>
                    <a href="#" data-route="/dashboard" class="menu-item">
                        <span class="w-5 h-5 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                            <div class="w-3 h-3 bg-gray-400 rounded-sm"></div>
                        </span>
                        <span class="text-sm font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" data-route="/transform" class="menu-item">
                        <span class="w-5 h-5 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                            <div class="w-3 h-3 bg-green-500 rounded-sm"></div>
                        </span>
                        <span class="text-sm font-medium">Transformar imágenes</span>
                    </a>
                </li>

                <li>
                    <a href="#" data-route="/tutorial" class="menu-item">
                        <span class="w-5 h-5 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                            <div class="w-3 h-3 bg-gray-400 rounded-sm"></div>
                        </span>
                        <span class="text-sm font-medium">Tutorial</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <!-- Divisor -->
        <div class="menu-divider my-4"></div>
        
        <!-- Historial de actividad -->
        <div class="mb-6">
            <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3">HISTORIAL DE ACTIVIDAD</h2>
            <ul id="history-section-items" class="space-y-1">
                <li>
                    <a href="#" data-route="/history" class="menu-item">
                        <span class="w-5 h-5 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                            <div class="w-3 h-3 bg-green-500 rounded-sm"></div>
                        </span>
                        <span class="text-sm font-medium">Historial de actividad</span>
                    </a>
                </li>
            
            </ul>
        </div>
        
        
    `;

    return menuContainer;
}