const crypto = require("crypto");

class AuthService {
    constructor() {
        this.users = {};
    }

    hash(password) {
        return crypto.createHash("sha256").update(password).digest("hex");
    }

    register(username, password) {
        this.users[username] = this.hash(password);
    }

    authenticate(username, password) {
        return this.users[username] === this.hash(password);
    }
}

const auth = new AuthService();
auth.register("admin", "Secure123");
auth.authenticate("admin", "Secure123");
