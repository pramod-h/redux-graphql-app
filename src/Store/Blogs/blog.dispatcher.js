import { fetchBlogs } from "./blog.action"

/**
 * Dispatch Method
 */

export class fetchBlogDispatcher {
    dispatchBlogs(dispatch) {
        debugger
        fetch("https://graphqlzero.almansi.me/api", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify({
                query: `{
                          posts {
                              data {
                                  id
                                  title
                              }
                          }
                        }`
            })
        }).then(res => res.json())
          .then(data => {
              console.log(data)
              dispatch(fetchBlogs(data))
          })
    }
}

export default new fetchBlogDispatcher()