import { initAuthModule } from "./modules/auth/Auth";

export class AppController {
    static start() {
        console.log("Iniciando aplicación...");
        initAuthModule();
    }
}
