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
    registerUser(name, email, password, hikingExperience, role) {
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
                    hikingExperience,
                    role,
                },
            });
            const token = jsonwebtoken_1.default.sign({ userId: newUser.id }, process.env.JWT_SECRET || "secret", {
                expiresIn: "1d",
            });
            return { newUser, token };
        });
    }
    userExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.prisma.user.findUnique({
                where: { id },
            });
            return !!user;
        });
    }
    completeProfile(userId, profileData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.userExists(userId))) {
                throw new Error("User not found.");
            }
            const profile = yield index_1.prisma.userProfile.upsert({
                where: { userId }, // Ensure userId is unique in schema
                update: {
                    phoneNumber: profileData.phoneNumber,
                    address: profileData.address,
                    gender: profileData.gender,
                    dateOfBirth: (profileData === null || profileData === void 0 ? void 0 : profileData.dateOfBirth)
                        ? new Date(profileData.dateOfBirth)
                        : undefined,
                    bio: profileData.bio,
                    profilePictureUrl: profileData.profilePictureUrl,
                    facebook: profileData.facebook,
                    twitter: profileData.twitter,
                    instagram: profileData.instagram,
                    website: profileData.website,
                    interests: profileData.interests,
                },
                create: {
                    userId,
                    phoneNumber: profileData.phoneNumber,
                    address: profileData.address,
                    gender: profileData.gender,
                    dateOfBirth: (profileData === null || profileData === void 0 ? void 0 : profileData.dateOfBirth)
                        ? new Date(profileData.dateOfBirth)
                        : undefined,
                    bio: profileData.bio,
                    profilePictureUrl: profileData.profilePictureUrl,
                    facebook: profileData.facebook,
                    twitter: profileData.twitter,
                    instagram: profileData.instagram,
                    website: profileData.website,
                    interests: profileData.interests,
                },
            });
            return profile;
        });
    }
    getUserProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.prisma.user.findUnique({
                where: { id: userId },
                include: {
                    profile: true,
                },
            });
            if (!user) {
                throw new Error("User not found.");
            }
            return user;
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
                expiresIn: "1d",
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
                expiresIn: "1d",
            });
            return { guide, token };
        });
    }
    getGuideProfile(guideId) {
        return __awaiter(this, void 0, void 0, function* () {
            const guide = yield index_1.prisma.user.findUnique({
                where: { id: guideId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true, // Assuming role is a field in the user model
                    createdAt: true,
                    updatedAt: true,
                    contact: true,
                    myTours: {
                        where: { isActive: true },
                    },
                },
            });
            if (!guide) {
                throw new Error("Guide not found.");
            }
            return guide;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield index_1.prisma.user.findMany();
        });
    }
}
exports.AuthService = AuthService;
exports.authService = new AuthService();
