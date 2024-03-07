import { PostModel } from "../models/PostModel.js";

export const getPost = async(req,res)=>{
    try{
        const posts  = await PostModel.find()
        console.log('posts',posts);
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const createPost = async(req,res)=>{
    try{
        const newPost = req.body;
        console.log(req.body);
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const updatePost = async(req,res)=>{
    try{
        const updatePost = req.body;
        if (updatePost && updatePost._id) {
            const post = await PostModel.findOneAndUpdate(
                {_id: updatePost._id},
                updatePost,
                {new: true}
            );
            res.status(200).json(post);
        } else {
            res.status(400).json({error: 'Invalid update data'});
        }
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const deletePost = async(req,res)=>{
    try{
        const postId = req.params.postId;
        if (postId) {
            const post = await PostModel.findOneAndDelete(
                {_id: postId},
            );
            res.status(200).json(post);
        } else {
            res.status(400).json({error: 'Invalid delete data'});
        }
    }
    catch(err){
        res.status(500).json({error : err});
    }
}