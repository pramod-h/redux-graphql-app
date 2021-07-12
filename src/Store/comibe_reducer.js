import {combineReducers } from 'redux';
import {BlogReducer} from "./Blogs/blog.reducer";

/**
 * Combine Reducer Method
 */
export const reducers = combineReducers ({
    Blogs : BlogReducer,
})