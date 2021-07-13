export const fetchAllBlogs = `
query {
        posts {
            data {
                id
                title
                body
            }
        }
    }`

