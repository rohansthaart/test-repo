"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./generated/prisma");
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const server = http_1.default.createServer(exports.app);
exports.prisma = new prisma_1.PrismaClient();
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const tour_routes_1 = __importDefault(require("./routes/tour.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
exports.app.use(loggerMiddleware_1.default);
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(__dirname + "public"));
exports.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, "..", "uploads")));
exports.app.get("/", (req, res) => {
    res.send("Hello World!");
});
const version = process.env.VERSION || "1.0.0";
const apiEndpoint = `/api/${version}`;
exports.app.use(`${apiEndpoint}/tours`, tour_routes_1.default);
exports.app.use(`${apiEndpoint}/auth`, auth_routes_1.default);
exports.default = server;
/**
|--------------------------------------------------
| guide: create tours, get tours, get tour by id, delete tour, update tour
|--------------------------------------------------
*/
{ /*
    search bar
    filter by sort bestMatch, mostPopular, NewlyAdded, Nearest
    activity hiking , trekking


    login register --> fullname email password hikingExperience

    -------------- Guide ----------------
    1 join requests
    2 total hikes
    3 rating analytisc
    4 accept or reject request
    5 message on both end
  
  
  */
}
