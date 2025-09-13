import type { User } from "../model/User";

const API_URL = import.meta.env.VITE_API_URL; // cambia solo aquí

export class AuthService {
    static async login(email: string, password: string): Promise<User> {
        const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
        });

        if (!res.ok) throw new Error("Error en login");
        return res.json();
    }

    static async logout(): Promise<void> {
        // si el backend maneja logout, llamas al endpoint
        // si no, no haces nada
    }
}
