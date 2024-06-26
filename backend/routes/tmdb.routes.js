import express from "express";
import {
  getTrending,
  getMoviesByType,
  getMovieCredits,
  getSimilarMovies,
  getMovieById,
  searchMovies,
  getMovieVideos,
} from "../controllers/tmdb.controller.js";

const router = express.Router();

router.get("/movie/trending", getTrending);
router.get("/type/:type", getMoviesByType);
router.get("/credits/:movieId", getMovieCredits);
router.get("/similar/:movieId", getSimilarMovies);
router.get("/movie/:movieId", getMovieById);
router.get("/search", searchMovies);
router.get("/movie/:movieId/videos", getMovieVideos);

export default router;
