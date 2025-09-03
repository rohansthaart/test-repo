"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controller/tour.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.route("/login").post(auth_controller_1.loginUser);
router.route("/register").post(auth_controller_1.registerUser); // Assuming you want to register a user
router.get("/allUsers", auth_controller_1.getAllUsers);
router
    .route("/updateProfile")
    .post(auth_middleware_1.authenticate, (0, upload_middleware_1.uploadFields)([{ name: "profilePicture", maxCount: 1 }]), auth_controller_1.completeProfile);
router.route("/getUserProfile").get(auth_middleware_1.authenticate, auth_controller_1.getMyProfileDetail);
router.get("/getGuideProfile/:id", auth_controller_1.getGuideProfile);
router.route("/:id").get(tour_controller_1.getTourById);
// Assuming you want to get a specific tour by ID
exports.default = router;
