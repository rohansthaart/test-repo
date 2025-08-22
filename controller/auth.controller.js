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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getGuideProfile = exports.loginAsGuide = exports.loginUser = exports.registerUser = void 0;
const auth_schema_1 = require("../schemas/auth.schema");
const auth_service_1 = require("../services/auth.service");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { success, error } = auth_schema_1.registerUserSchema.safeParse(data);
    if (!success) {
        console.log(error);
        res.status(400).json({ error: error });
        return;
    }
    const { name, email, password, hikingExperience, userRole } = data;
    try {
        const user = yield auth_service_1.authService.registerUser(name, email, password, hikingExperience, userRole);
        res.status(201).json({ message: "User registered successfully.", user });
    }
    catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({
            error: (error === null || error === void 0 ? void 0 : error.message) || "An error occurred while registering the user.",
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { success, error } = auth_schema_1.loginUserSchema.safeParse(data);
    if (!success) {
        res
            .status(400)
            .json({ error: error.errors.map((e) => e.message).join(", ") });
    }
    const { email, password } = req.body;
    try {
        const { user, token } = yield auth_service_1.authService.loginUser(email, password);
        res.status(200).json({ message: "Login successful.", user, token });
    }
    catch (error) {
        console.error("Login Error:", error);
        res.status(401).json({ error: "Invalid email or password." });
    }
});
exports.loginUser = loginUser;
const loginAsGuide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { success, error } = auth_schema_1.registerUserSchema.safeParse(data);
    if (!success) {
        return res
            .status(400)
            .json({ error: error.errors.map((e) => e.message).join(", ") });
    }
    const { email, password } = req.body;
    try {
        const { guide, token } = yield auth_service_1.authService.loginAsGuide(email, password);
        res.status(200).json({ message: "Guide login successful.", guide, token });
    }
    catch (error) {
        console.error("Guide Login Error:", error);
        res.status(401).json({ error: "Invalid email or password." });
    }
});
exports.loginAsGuide = loginAsGuide;
const getGuideProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const guideId = req.params.id;
    try {
        const guideProfile = yield auth_service_1.authService.getGuideProfile(guideId);
        res.status(200).json(guideProfile);
    }
    catch (error) {
        console.error("Error fetching guide profile:", error);
        res
            .status(500)
            .json({ error: "An error occurred while fetching the guide profile." });
    }
});
exports.getGuideProfile = getGuideProfile;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield auth_service_1.authService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "An error occurred while fetching users." });
    }
});
exports.getAllUsers = getAllUsers;
