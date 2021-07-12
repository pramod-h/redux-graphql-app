export const FETCH_ALL_BLOGS = 'FETCH_ALL_BLOGS';

/**
 * 
 * @param {*} blogs 
 * @returns 
 */
export const fetchBlogs = (blogs) => {
    console.log("Action", blogs)
    return {
        type: FETCH_ALL_BLOGS,
        payload : blogs
    }
}