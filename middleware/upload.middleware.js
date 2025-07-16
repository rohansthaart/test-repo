"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFields = exports.uploadArray = exports.uploadSingle = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Ensure the uploads directory exists
const uploadPath = path_1.default.join(__dirname, "..", "..", "uploads");
if (!fs_1.default.existsSync(uploadPath)) {
    fs_1.default.mkdirSync(uploadPath);
}
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});
// Export different formats
const uploadSingle = (fieldName) => upload.single(fieldName);
exports.uploadSingle = uploadSingle;
const uploadArray = (fieldName, maxCount) => upload.array(fieldName, maxCount);
exports.uploadArray = uploadArray;
const uploadFields = (fields) => upload.fields(fields);
exports.uploadFields = uploadFields;
