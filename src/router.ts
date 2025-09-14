// src/router.ts
import { showLoginView, showRegisterView } from "./modules/auth/Auth";
import { updateHeader } from "./modules/header/Header";

export class Router {
    private static currentRoute: string = '/';
    private static basePath = import.meta.env.VITE_BASE_URL || '';
    private static apiUrl = import.meta.env.VITE_API_URL || 'https://your-mockapi-endpoint.com';
    
    static init() {
        console.log('Base path:', this.basePath);
        console.log('API URL:', this.apiUrl);
        
        // Manejar la navegación inicial
        this.route();

        // Manejar los eventos de navegación del navegador
        window.addEventListener('popstate', () => {
            console.log('Popstate event detected - handling back/forward navigation');
            this.route();
        });

        // Delegación de eventos para navegación de enlaces con data-route
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a[data-route]');
            
            if (link) {
                e.preventDefault();
                const route = link.getAttribute('data-route')!;
                this.navigateTo(route);
            }
        });

        // MANEJO ESPECÍFICO PARA LOS BOTONES DEL HEADER (LOGIN/REGISTER)
        this.setupHeaderButtonListeners();
    }

    // Nuevo método para manejar los botones del header
    private static setupHeaderButtonListeners() {
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            
            // Detectar clic en botón de login del dropdown
            if (target.id === 'login-btn' || target.closest('#login-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Login button clicked from header');
                this.navigateTo('/login');
                return;
            }
            
            // Detectar clic en botón de registro del dropdown
            if (target.id === 'register-btn' || target.closest('#register-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Register button clicked from header');
                this.navigateTo('/register');
                return;
            }
            
            // Detectar clic en botón de logout del dropdown
            if (target.id === 'logout-btn' || target.closest('#logout-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Logout button clicked from header');
                // Aquí puedes agregar la lógica de logout si es necesario
                return;
            }
        });
    }

    static route() {
        const path = window.location.pathname;
        this.currentRoute = path;
        console.log('Navegando a:', path);

        // Actualizar el header
        updateHeader();

        // Limpiar el contenido principal
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = '';

        // Cargar el módulo correspondiente
        switch (path) {
            case '/':
            case this.basePath:
                this.showMenuOnly();
                break;
            case `${this.basePath}/login`:
            case '/login':
                showLoginView();
                break;
            case `${this.basePath}/register`:
            case '/register':
                showRegisterView();
                break;
            case `${this.basePath}/dashboard`:
            case '/dashboard':
                this.showModulePlaceholder('dashboard');
                break;
            case `${this.basePath}/transform`:
            case '/transform':
                this.showModulePlaceholder('transform');
                break;
            case `${this.basePath}/history`:
            case '/history':
                this.showModulePlaceholder('history');
                break;
            case `${this.basePath}/tutorial`: 
            case '/tutorial':
                this.showModulePlaceholder('tutorial');
                break;
            default:
                // Si tiene base path y no coincide con ninguna ruta, redirigir al home
                if (this.basePath && path.startsWith(this.basePath)) {
                    this.navigateTo('/');
                } else {
                    this.showMenuOnly();
                }
                break;
        }
    }

    static navigateTo(path: string) {
        let fullPath = path;
        
        // Agregar base path si existe y no está ya incluido
        if (this.basePath && !path.startsWith(this.basePath)) {
            fullPath = `${this.basePath}${path.startsWith('/') ? path : '/' + path}`;
        }
        
        window.history.pushState({}, '', fullPath);
        this.route();
    }

    static showMenuOnly() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="flex items-center justify-center h-full">
                    <div class="text-center p-8">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Bienvenido a Alterpic</h2>
                        <p class="text-gray-600">Selecciona una opción del menú para comenzar</p>
                    </div>
                </div>
            `;
        }
    }

    static showModulePlaceholder(moduleName: string) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            // Traducciones específicas para nombres de módulos
            const moduleNames: {[key: string]: string} = {
                'dashboard': 'Dashboard',
                'transform': 'Transformar Imágenes',
                'history': 'Historial de Actividad',
                'tutorial': 'Tutorial',
                
            };
            
            const formattedName = moduleNames[moduleName] || moduleName;
            
            mainContent.innerHTML = `
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Módulo ${formattedName}</h2>
                    <p class="text-gray-600">Este módulo está actualmente en desarrollo.</p>
                </div>
            `;
        }
    }

    // Método para construir URLs completas para API calls
    static buildApiUrl(endpoint: string): string {
        const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        return `${this.apiUrl}${normalizedEndpoint}`;
    }
}