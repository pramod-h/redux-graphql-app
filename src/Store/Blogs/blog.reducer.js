import {FETCH_ALL_BLOGS} from ".";

const initialState = {
    blogs : [],
}

/**
 * 
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */
export const BlogReducer = (state = initialState.blogs, {type, payload}) => {
    switch(type) {
        case FETCH_ALL_BLOGS :
            return {...state, blogs :payload};
        default: 
            return state;
    }
}

export default  BlogReducer