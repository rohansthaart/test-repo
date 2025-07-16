"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controller/tour.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const prisma_1 = require("../generated/prisma");
const router = express_1.default.Router();
router.use(auth_middleware_1.authenticate);
router
    .route("/")
    .get(tour_controller_1.getTours)
    .post((0, auth_middleware_1.restrictTo)(prisma_1.Role.GUIDE), (0, upload_middleware_1.uploadFields)([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
]), tour_controller_1.createTour);
/**
  |--------------------------------------------------
  | User API
  |--------------------------------------------------
  */
router.route("/review/:id").post((0, auth_middleware_1.restrictTo)(prisma_1.Role.USER), tour_controller_1.reviewTour); // Assuming you want to create a review for a tour
router.route("/join/:id").post((0, auth_middleware_1.restrictTo)(prisma_1.Role.USER), tour_controller_1.joinTour); // Assuming you want to join a tour
router.route("/leave/:id").post((0, auth_middleware_1.restrictTo)(prisma_1.Role.USER), tour_controller_1.leaveTour); // Assuming you want to leave a tour
router.route("/joinedTours").get((0, auth_middleware_1.restrictTo)(prisma_1.Role.USER), tour_controller_1.getJoinedTours); // Assuming you want to get tours joined by the userq
router
    .route("/:id")
    .get(tour_controller_1.getTourById)
    .put((0, auth_middleware_1.restrictTo)(prisma_1.Role.GUIDE), (0, upload_middleware_1.uploadFields)([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
]), tour_controller_1.updateTour // Assuming you want to update a tour
); // Assuming you want to get a specific tour by ID
exports.default = router;
