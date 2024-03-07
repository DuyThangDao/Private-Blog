import express from "express";
import { getPost,createPost,updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/',getPost);
router.post('/',createPost);
router.post('/update',updatePost);
router.delete('/:postId',deletePost);

export default router;