import { Router } from "express";
import { getPosts, postPosts, getTrendingPosts, getUserPosts, updateUserPost } from "../controllers/posts.controller.js";
import { getLikes } from "../controllers/likes.controller.js";
import { getUsersBySearch } from "../controllers/users.controller.js";
import { postBodyValidation } from "../middlewares/postsBodyValidation.middleware.js";
import { tokenValidation } from "../middlewares/tokenValidations.middleware.js";
import { postFollow,deleteFollow, getFollowStatus } from "../controllers/follows.controller.js";
import { getAllShares, postShare } from "../controllers/shares.controller.js";


const router = Router();


router.get("/timeline",tokenValidation, getPosts);

router.post("/timeline", tokenValidation, postBodyValidation, postPosts);
router.get("/hashtag/:hashtag",  getTrendingPosts);
router.get("/user/:userId",tokenValidation, getUserPosts);
router.get("/follow/:userId",tokenValidation, getFollowStatus);
router.post("/user/:userId",tokenValidation, postFollow);
router.delete("/user/:userId",tokenValidation, deleteFollow);
router.put("/timeline", updateUserPost);
router.get("/likes/:postId", getLikes);
router.get("/usersearch/:username", tokenValidation, getUsersBySearch);
router.post("/repost/:postId", postShare);
router.get("/reposts", tokenValidation, getAllShares)
export default router;