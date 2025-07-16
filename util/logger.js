"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
// Custom log format for console and file output
const logFormat = winston_1.default.format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});
// Define log levels and colors for better readability
const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const logColors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
};
// Apply colors to console output
winston_1.default.addColors(logColors);
// Create the logger instance
const logger = winston_1.default.createLogger({
    levels: logLevels,
    // level: process.env.NODE_ENV === "production" ? "info" : "debug",
    level: "debug",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.default.format.errors({ stack: true }), // Include stack traces for errors
    winston_1.default.format.splat(), // Enable string interpolation
    winston_1.default.format.json() // JSON format for file logs
    ),
    transports: [
        // Console transport for development
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), // Colorize all output
            logFormat),
        }),
        // Daily rotating file transport for production
        new winston_daily_rotate_file_1.default({
            filename: "logs/app-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json() // JSON format for file logs
            ),
        }),
    ],
    exceptionHandlers: [
        // Handle uncaught exceptions in production
        new winston_1.default.transports.File({ filename: "logs/exceptions.log" }),
    ],
    rejectionHandlers: [
        // Handle unhandled promise rejections in production
        new winston_1.default.transports.File({ filename: "logs/rejections.log" }),
    ],
});
// Handle uncaught exceptions and rejections in production
if (process.env.NODE_ENV === "production") {
    logger.exceptions.handle(new winston_1.default.transports.File({ filename: "logs/exceptions.log" }));
    logger.rejections.handle(new winston_1.default.transports.File({ filename: "logs/rejections.log" }));
}
exports.default = logger;
