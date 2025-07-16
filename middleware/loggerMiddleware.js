"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("../util/logger"));
// Morgan format
const stream = {
    write: (message) => logger_1.default.http(message.trim()), // Log HTTP requests
};
const httpLogger = (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms", { stream });
exports.default = httpLogger;
