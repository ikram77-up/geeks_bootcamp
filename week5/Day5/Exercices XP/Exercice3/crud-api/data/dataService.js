import axxios from "axios";

export const fetchPosts = async () => {
    const response = await axxios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}