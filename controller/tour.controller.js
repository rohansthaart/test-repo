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
exports.getJoinedTours = exports.reviewTour = exports.leaveTour = exports.updateTour = exports.joinTour = exports.getTourById = exports.createTour = exports.getTours = void 0;
const index_1 = require("../index");
// filters
const getTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = "1", limit = "10", sortBy = "createdAt", sortOrder = "desc", search = "", } = req.query;
        const pageNum = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const skip = (pageNum - 1) * pageSize;
        const searchQuery = search.toString().trim();
        const whereClause = searchQuery
            ? {
                OR: [
                    { title: { contains: searchQuery, mode: "insensitive" } },
                    { location: { contains: searchQuery, mode: "insensitive" } },
                ],
            }
            : {};
        const [tours, total] = yield Promise.all([
            index_1.prisma.tour.findMany({
                where: whereClause,
                orderBy: {
                    [sortBy]: sortOrder === "asc" ? "asc" : "desc",
                },
                skip,
                take: pageSize,
                include: {
                    guide: { select: { id: true, name: true, email: true } },
                    gallery: true,
                },
            }),
            index_1.prisma.tour.count({ where: whereClause }),
        ]);
        res.status(200).json({
            data: tours,
            pagination: {
                total,
                page: pageNum,
                limit: pageSize,
                totalPages: Math.ceil(total / pageSize),
            },
        });
    }
    catch (error) {
        console.error("Get Tours Error:", error);
        res.status(500).json({ error: "An error occurred while fetching tours." });
    }
});
exports.getTours = getTours;
const createTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = req.user;
    try {
        const { title, location, description, price, difficulty, distanceInKm, durationInHrs, altitude, season, minGroupSize, maxGroupSize, startingLat, startingLng, endingLat, endingLng, route, highlights, itinerary, feeIncluded, feeNotIncluded, hikingEssentials, cancellationPolicy, meetingPoint, meetingPointUrl, meetingTime, contactDetails, tags, tourType, scheduledDate, } = req.body;
        let thumbnailFile;
        let galleryFiles = [];
        if (req.files && !Array.isArray(req.files)) {
            thumbnailFile = (_a = req.files["thumbnail"]) === null || _a === void 0 ? void 0 : _a[0];
            galleryFiles =
                req.files["gallery"] || [];
        }
        if (!thumbnailFile) {
            res.status(400).json({ error: "Thumbnail image is required." });
            return;
        }
        const thumbnailUrl = `/uploads/${thumbnailFile.filename}`;
        const galleryImageUrls = galleryFiles.map((file) => `/uploads/${file.filename}`);
        console.log(req.body);
        // Create the tour
        const newTour = yield index_1.prisma.tour.create({
            data: {
                title,
                location,
                description,
                price: parseInt(price),
                difficulty,
                distanceInKm: parseFloat(distanceInKm),
                durationInHrs: parseFloat(durationInHrs),
                altitude,
                season,
                minGroupSize: parseInt(minGroupSize),
                maxGroupSize: parseInt(maxGroupSize),
                startingLat: parseFloat(startingLat),
                startingLng: parseFloat(startingLng),
                endingLat: endingLat ? parseFloat(endingLat) : null,
                endingLng: endingLng ? parseFloat(endingLng) : null,
                route,
                highlights: JSON.parse(highlights),
                itinerary: JSON.parse(itinerary),
                feeIncluded: JSON.parse(feeIncluded),
                feeNotIncluded: JSON.parse(feeNotIncluded),
                hikingEssentials: JSON.parse(hikingEssentials),
                cancellationPolicy: cancellationPolicy || null,
                meetingPoint: meetingPoint || null,
                meetingPointUrl: meetingPointUrl || null,
                meetingTime: meetingTime || null,
                contactDetails: contactDetails ? JSON.parse(contactDetails) : undefined,
                thumbnailUrl,
                tags: JSON.parse(tags),
                tourType,
                scheduledDate: scheduledDate,
                guide: {
                    connect: { id: user.id },
                },
                // Relations like gallery will be created next
            },
        });
        // Create gallery records linked to the tour
        if (galleryImageUrls.length > 0) {
            yield index_1.prisma.gallery.createMany({
                data: galleryImageUrls.map((url) => ({
                    imageUrl: url,
                    tourId: newTour.id,
                })),
            });
        }
        // Optionally, you can return the full tour with its relations
        const tourWithGallery = yield index_1.prisma.tour.findUnique({
            where: { id: newTour.id },
            include: { gallery: true },
        });
        res.status(201).json(tourWithGallery);
    }
    catch (error) {
        console.error("Create Tour Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while creating the tour." });
    }
});
exports.createTour = createTour;
const updateTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const user = req.user;
    const { tourId } = req.params;
    try {
        const { title, location, description, price, difficulty, distanceInKm, durationInHrs, altitude, season, minGroupSize, maxGroupSize, startingLat, startingLng, endingLat, endingLng, route, highlights, itinerary, feeIncluded, feeNotIncluded, hikingEssentials, cancellationPolicy, meetingPoint, meetingPointUrl, meetingTime, contactDetails, tags, tourType, } = req.body;
        // Validate ownership (optional: restrict only guide can update)
        const tour = yield index_1.prisma.tour.findUnique({
            where: { id: tourId },
        });
        if (!tour) {
            res.status(404).json({ error: "Tour not found." });
            return;
        }
        if (tour.guideId !== user.id) {
            res
                .status(403)
                .json({ error: "You are not authorized to update this tour." });
        }
        let thumbnailFile;
        let galleryFiles = [];
        if (req.files && !Array.isArray(req.files)) {
            thumbnailFile = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b[0];
            galleryFiles = ((_c = req.files) === null || _c === void 0 ? void 0 : _c.gallery) || [];
        }
        let thumbnailUrl = tour.thumbnailUrl;
        const galleryImageUrls = galleryFiles.map((file) => `/uploads/${file.filename}`);
        if (thumbnailFile) {
            thumbnailUrl = `/uploads/${thumbnailFile.filename}`;
        }
        const updatedTour = yield index_1.prisma.tour.update({
            where: { id: tourId },
            data: {
                title,
                location,
                description,
                price: price ? parseInt(price) : undefined,
                difficulty,
                distanceInKm: distanceInKm ? parseFloat(distanceInKm) : undefined,
                durationInHrs: durationInHrs ? parseFloat(durationInHrs) : undefined,
                altitude,
                season,
                minGroupSize: minGroupSize ? parseInt(minGroupSize) : undefined,
                maxGroupSize: maxGroupSize ? parseInt(maxGroupSize) : undefined,
                startingLat: startingLat ? parseFloat(startingLat) : undefined,
                startingLng: startingLng ? parseFloat(startingLng) : undefined,
                endingLat: endingLat ? parseFloat(endingLat) : null,
                endingLng: endingLng ? parseFloat(endingLng) : null,
                route,
                highlights: highlights ? JSON.parse(highlights) : undefined,
                itinerary: itinerary ? JSON.parse(itinerary) : undefined,
                feeIncluded: feeIncluded ? JSON.parse(feeIncluded) : undefined,
                feeNotIncluded: feeNotIncluded ? JSON.parse(feeNotIncluded) : undefined,
                hikingEssentials: hikingEssentials
                    ? JSON.parse(hikingEssentials)
                    : undefined,
                cancellationPolicy: cancellationPolicy || undefined,
                meetingPoint: meetingPoint || undefined,
                meetingPointUrl: meetingPointUrl || undefined,
                meetingTime: meetingTime || undefined,
                contactDetails: contactDetails ? JSON.parse(contactDetails) : undefined,
                thumbnailUrl,
                tags: tags ? JSON.parse(tags) : undefined,
                tourType,
            },
        });
        // Add new gallery images if any
        if (galleryImageUrls.length > 0) {
            yield index_1.prisma.gallery.createMany({
                data: galleryImageUrls.map((url) => ({
                    imageUrl: url,
                    tourId: updatedTour.id,
                })),
            });
        }
        // Fetch updated tour with gallery
        const tourWithGallery = yield index_1.prisma.tour.findUnique({
            where: { id: updatedTour.id },
            include: { gallery: true },
        });
        res.status(200).json(tourWithGallery);
    }
    catch (error) {
        console.error("Update Tour Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while updating the tour." });
    }
});
exports.updateTour = updateTour;
const getTourById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tour = yield index_1.prisma.tour.findUnique({
            where: { id },
            include: { gallery: true, guide: true },
        });
        if (!tour) {
            res.status(404).json({ error: "Tour not found." });
            return;
        }
        res.status(200).json(tour);
    }
    catch (error) {
        console.error("Get Tour By ID Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while fetching the tour." });
    }
});
exports.getTourById = getTourById;
const joinTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { tourId } = req.params;
    try {
        const existingJoin = yield index_1.prisma.userTour.findUnique({
            where: {
                userId_tourId: {
                    userId: user.id,
                    tourId,
                },
            },
        });
        if (existingJoin) {
            res.status(400).json({ error: "You have already joined this tour." });
        }
        const newJoin = yield index_1.prisma.userTour.create({
            data: {
                userId: user.id,
                tourId,
            },
        });
        res
            .status(201)
            .json({ message: "Successfully joined the tour", join: newJoin });
    }
    catch (error) {
        console.error("Join Tour Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while joining the tour." });
    }
});
exports.joinTour = joinTour;
const leaveTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { tourId } = req.params;
    try {
        // 1. Check if the user has joined this tour
        const existingJoin = yield index_1.prisma.userTour.findUnique({
            where: {
                userId_tourId: {
                    userId: user.id,
                    tourId,
                },
            },
        });
        if (!existingJoin) {
            res.status(404).json({ error: "You have not joined this tour." });
        }
        // 2. Delete the join record
        yield index_1.prisma.userTour.delete({
            where: {
                userId_tourId: {
                    userId: user.id,
                    tourId,
                },
            },
        });
        res.status(200).json({ message: "Successfully left the tour." });
    }
    catch (error) {
        console.error("Leave Tour Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while leaving the tour." });
    }
}); //delete route
exports.leaveTour = leaveTour;
const reviewTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { tourId } = req.params;
    const { rating, comment } = req.body;
    try {
        // 1. Check if the user has joined this tour
        const hasJoined = yield index_1.prisma.userTour.findUnique({
            where: {
                userId_tourId: {
                    userId: user.id,
                    tourId,
                },
            },
        });
        if (!hasJoined) {
            res
                .status(403)
                .json({ error: "You can only review tours you have joined." });
        }
        // 2. Check if the user has already reviewed this tour
        const existingReview = yield index_1.prisma.review.findUnique({
            where: {
                userId_tourId: {
                    userId: user.id,
                    tourId,
                },
            },
        });
        if (existingReview) {
            res.status(400).json({ error: "You have already reviewed this tour." });
        }
        // 3. Create the review
        const newReview = yield index_1.prisma.review.create({
            data: {
                rating: parseInt(rating),
                comment,
                userId: user.id,
                tourId,
            },
        });
        res.status(201).json(newReview);
    }
    catch (error) {
        console.error("Review Tour Error:", error);
        res
            .status(500)
            .json({ error: "An error occurred while reviewing the tour." });
    }
});
exports.reviewTour = reviewTour;
const getJoinedTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { page = "1", limit = "10", search = "", sortBy = "joinedAt", // or "tour.title", etc.
    sortOrder = "desc", } = req.query;
    const pageNum = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNum - 1) * pageSize;
    try {
        const searchQuery = search.toString().trim();
        const whereClause = {
            userId: user.id,
            tour: searchQuery
                ? {
                    OR: [
                        { title: { contains: searchQuery, mode: "insensitive" } },
                        { location: { contains: searchQuery, mode: "insensitive" } },
                    ],
                }
                : undefined,
        };
        const [joined, total] = yield Promise.all([
            index_1.prisma.userTour.findMany({
                where: whereClause,
                skip,
                take: pageSize,
                orderBy: {
                    [sortBy]: sortOrder === "asc" ? "asc" : "desc",
                },
                include: {
                    tour: {
                        include: {
                            guide: { select: { id: true, name: true, email: true } },
                            gallery: true,
                        },
                    },
                },
            }),
            index_1.prisma.userTour.count({ where: whereClause }),
        ]);
        // Extract only tour data from join records
        const tours = joined.map((join) => join.tour);
        res.status(200).json({
            data: tours,
            pagination: {
                total,
                page: pageNum,
                limit: pageSize,
                totalPages: Math.ceil(total / pageSize),
            },
        });
    }
    catch (error) {
        console.error("Get Joined Tours Error:", error);
        res.status(500).json({
            error: "An error occurred while fetching joined tours.",
        });
    }
});
exports.getJoinedTours = getJoinedTours;
