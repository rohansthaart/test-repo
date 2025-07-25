"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const index_1 = require("../index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 10;
class AuthService {
    hashPassword(password) {
        return bcrypt_1.default.hash(password, saltRounds);
    }
    isUserExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.prisma.user.findUnique({
                where: { email },
            });
            return !!user;
        });
    }
    registerUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.isUserExists(email)) {
                throw new Error("User with this email already exists.");
            }
            const hashedPass = yield this.hashPassword(password);
            const newUser = yield index_1.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPass,
                },
            });
            return newUser;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                throw new Error("User not found.");
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid password.");
            }
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET || "secret", {
                expiresIn: "1h",
            });
            return { user, token };
        });
    }
    loginAsGuide(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const guide = yield index_1.prisma.user.findUnique({
                where: { email },
            });
            if (!guide) {
                throw new Error("Guide not found.");
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, guide.password);
            if (!isPasswordValid) {
                throw new Error("Invalid password.");
            }
            const token = jsonwebtoken_1.default.sign({ guideId: guide.id }, process.env.JWT_SECRET || "secret", {
                expiresIn: "1h",
            });
            return { guide, token };
        });
    }
}
exports.AuthService = AuthService;
exports.authService = new AuthService();
