export function renderLogin(): HTMLElement {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
            <div class="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md mx-4">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">Alterpic</h1>
                    <p class="text-gray-600">Transforma tus imágenes de manera creativa</p>
                </div>
                
                <h2 class="text-2xl font-bold text-center text-gray-800 mb-2">Iniciar Sesión</h2>
            
                
                <form id="login-form" class="flex flex-col gap-5">
                    <div>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Correo Electrónico" 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84bfc3]"
                            required
                        />
                    </div>
                    
                    <div>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="Contraseña" 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84bfc3]"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        class="bg-[#84bfc3] text-white py-3 rounded-lg font-medium mt-4 hover:bg-[#6aa8ac] transition"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                
                <div class="text-center mt-8">
                    <p class="text-gray-600">¿No tienes una cuenta? <a href="#" class="text-[#84bfc3] hover:text-[#6aa8ac] font-medium">Regístrate</a></p>
                </div>
            </div>
        </div>
    `;

    const form = container.querySelector<HTMLFormElement>("#login-form")!;
    const emailInput = form.querySelector<HTMLInputElement>("#email")!;
    const passwordInput = form.querySelector<HTMLInputElement>("#password")!;

    form.onsubmit = async (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            // await AuthController.login(email, password);
            console.log("Login exitoso ✅", { email, password });
            alert("Login exitoso ✅");
        } catch (err) {
            alert("Error ❌: " + (err as Error).message);
        }
    };

    return container;
}