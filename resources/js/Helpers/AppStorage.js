import { use } from "vue/types/umd";

class AppStorage {
    storeToken(token) {
        localStorage.setItem("token", token);
    }

    storeUser(user) {
        localStorage.setItem("user", user);
    }

    store(token, user) {
        this.storeToken(token);
        this.storeUser(user);
    }

    clear() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    getToken() {
        localStorage.getItem(token);
    }

    getUser() {
        localStorage.getItem(user);
    }
}

export default AppStorage = new AppStorage();
