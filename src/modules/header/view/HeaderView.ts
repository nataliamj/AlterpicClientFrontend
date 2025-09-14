// src/modules/header/view/HeaderView.ts
export function renderHeader(isAuthenticated: boolean = false): HTMLElement {
    const headerContainer = document.createElement("div");
    headerContainer.className = "w-full bg-[#eefbff] text-gray-800 p-3 fixed top-0 left-0 z-20 flex justify-between items-center h-12 shadow-sm";
    
    headerContainer.innerHTML = `
        <!-- Logo a la izquierda -->
        <a href="#" data-route="/dashboard" class="cursor-pointer">
                <img src="/assets/images/Logito.png" alt="Alterpic Logo" class="h-14 mx-auto">
        </a>
        
        <!-- Menú de usuario a la derecha -->
        <div class="relative">
            <button id="user-menu-button" class="flex items-center space-x-2 focus:outline-none transition-transform hover:scale-105">
                <img src="/assets/images/user.png" alt="Usuario" class="h-8 w-8 rounded-full border-2 border-gray-700">
                <svg class="h-4 w-4 transition-transform text-gray-800" id="user-menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            
            <!-- Menú desplegable de usuario -->
            <div id="user-dropdown-menu" class="hidden absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-30 border border-gray-300">
                // En la parte del dropdown menu:
            ${isAuthenticated ? `
                <a href="#" data-route="/account" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Cuenta</a>
                <a href="#" id="logout-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Cerrar Sesión</a>
            ` : `
                <a href="#" id="login-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Ingresar</a>
                <a href="#" id="register-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Registrarse</a>
`}
            </div>
        </div>
    `;

    return headerContainer;
}

export function updateHeader(isAuthenticated: boolean): void {
    const userDropdownMenu = document.querySelector('#user-dropdown-menu');
    if (userDropdownMenu) {
        userDropdownMenu.innerHTML = isAuthenticated ? `
            <a href="#" data-route="/account" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Cuenta</a>
            <a href="#" id="logout-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Cerrar Sesión</a>
        ` : `
            <a href="#" id="login-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Ingresar</a>
            <a href="#" id="register-btn" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition">Registrarse</a>
        `;
    }
}

export function toggleUserMenu(isOpen: boolean): void {
    const userDropdownMenu = document.querySelector('#user-dropdown-menu');
    const userMenuArrow = document.querySelector('#user-menu-arrow');
    const userMenuButton = document.querySelector('#user-menu-button');
    
    if (userDropdownMenu) {
        if (isOpen) {
            userDropdownMenu.classList.remove('hidden');
            userDropdownMenu.classList.add('block');
        } else {
            userDropdownMenu.classList.remove('block');
            userDropdownMenu.classList.add('hidden');
        }
    }
    
    if (userMenuArrow) {
        userMenuArrow.classList.toggle('rotate-180', isOpen);
    }

    if (userMenuButton) {
        userMenuButton.classList.toggle('bg-blue-100', isOpen);
        userMenuButton.classList.toggle('rounded-md', isOpen);
    }
}