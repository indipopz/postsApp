import axios from 'axios';
import { POST_API_KEY, FIREBASE_REGISTER_URL, FIREBASE_LOGIN_URL } from '../keys';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = `?key=${POST_API_KEY}`;

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };
}

export function registerUser(postData){
    const request = axios.post(FIREBASE_REGISTER_URL, postData);

    return {
        type: REGISTER_USER,
        payload: request
    };
}

export function loginUser(postData){
    const request = axios.post(FIREBASE_LOGIN_URL, postData);
    
    return {
        type: LOGIN_USER,
        payload: request
    };
}