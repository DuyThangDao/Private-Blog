import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(URL+'/posts');
export const createPosts = (payload) => axios.post(URL+'/posts',payload);
export const updatePost = (payload) => axios.post(URL+'/posts/update',payload);
export const deletePost = (payload) => axios.delete(URL+'/posts/'+payload._id);