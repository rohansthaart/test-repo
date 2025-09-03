"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeProfileSchema = exports.loginUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(4, "Password must be at least 4 characters long"),
    hikingExperience: zod_1.z.string().optional(),
    userRole: zod_1.z.enum(["USER", "GUIDE"]),
});
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(4, "Password must be at least 4 characters long"),
});
exports.completeProfileSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(10, "Phone number must be at least 10 characters long"),
    address: zod_1.z.string().min(10, "Address must be at least 10 characters long").optional(),
    gender: zod_1.z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
    dateOfBirth: zod_1.z.string().optional(),
    bio: zod_1.z.string().max(500, "Bio must be at most 500 characters long").optional(),
    profilePicture: zod_1.z.any().optional(),
    facebook: zod_1.z.string().url("Invalid URL").optional(),
    twitter: zod_1.z.string().url("Invalid URL").optional(),
    instagram: zod_1.z.string().url("Invalid URL").optional(),
    website: zod_1.z.string().url("Invalid URL").optional(),
    interests: zod_1.z.array(zod_1.z.string()).min(1, "At least one interest is required").optional(),
});
