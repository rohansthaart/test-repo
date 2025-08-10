"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controller/tour.controller");
const auth_controller_1 = require("../controller/auth.controller");
const router = express_1.default.Router();
router.route("/login").post(auth_controller_1.loginUser);
router.route("/register").post(auth_controller_1.registerUser); // Assuming you want to register a user
router.get("/allUsers", auth_controller_1.getAllUsers);
router.get('/getGuideProfile/:id', auth_controller_1.getGuideProfile);
router.route("/:id").get(tour_controller_1.getTourById);
// Assuming you want to get a specific tour by ID
exports.default = router;
