import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICMS_ENDPOINT

export const getPosts = async () => {
    const query = gql `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredimage {
                url
              }
              categories {
                slug
                name
              }
            }
          }
        }
      }
    `
      const result = await request(graphqlAPI, query)

      return result.postsConnection.edges

}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails () {
      posts(
        orderBy: created_ASC
        last: 3
      ){
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts;
}