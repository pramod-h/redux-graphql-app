import { fetchBlogs } from "./blog.action";
import {fetchAllBlogs} from '../../query/fetchAllBlogs';

/**
 * Dispatch Method
 */
export class fetchBlogDispatcher {
    dispatchBlogs(dispatch) {
        fetch("https://graphqlzero.almansi.me/api", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify({
                query: fetchAllBlogs,
            })
        }).then(res => res.json())
          .then(data => {
              console.log(data)
              dispatch(fetchBlogs(data))
          })
    }
}

export default new fetchBlogDispatcher()