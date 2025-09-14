// src/modules/auth/controller/AuthController.ts
import { AuthService } from "../service/AuthService";
import type { User } from "../model/User";

export class AuthController {
    private static user: User | null = null;

    static async login(email: string, password: string) {
        console.log("➡️ Enviando datos al backend:", { email, password });
        const user = await AuthService.login(email, password);
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log("✅ Respuesta del backend:", user);
        return user;
    }

    static logout() {
        this.user = null;
        localStorage.removeItem("user");
    }

    static getUser(): User | null {
        if (!this.user) {
            const raw = localStorage.getItem("user");
            this.user = raw ? JSON.parse(raw) : null;
        }
        return this.user;
    }

    // En src/modules/auth/controller/AuthController.ts
    static async register(name: string, email: string, password: string) {
        console.log("➡️ Enviando datos de registro al backend:", { name, email, password });
        const user = await AuthService.register(name, email, password);
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log("✅ Registro exitoso:", user);
        return user;
    }
}
