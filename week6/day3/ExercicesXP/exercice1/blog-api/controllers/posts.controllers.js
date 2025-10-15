import {
    getallposts,
    getpost,
    createpost,
    deletepost,
    updatepost
} from "../models/posts.js";
export const getallpostsController = async (req, res) => {
    try {
        const posts = await getallposts();
        res.status(200).json(posts.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getpostController = async (req, res) => {
    try {
        const post = await getpost(req.params.id);
        if (post.rows.length === 0) {
            return res.status(404).json({ message: "post not found" });
        }
        res.status(200).json(post.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createpostController = async (req, res) => {
    try {
        const post = await createpost(req.body.title, req.body.content);
        res.status(200).json(post.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deletepostController = async (req, res) => {
    try {
        const result = await deletepost(req.params.id);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




export const updatepostController = async (req, res) => {
    try {
        const post = await updatepost(req.params.id, req.body.title, req.body.content);
        res.status(200).json(post.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



