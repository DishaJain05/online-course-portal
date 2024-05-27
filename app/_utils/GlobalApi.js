import { gql, request } from 'graphql-request';

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const getAllCourseList = async () => {
    const query = gql`
    query MyQuery {
        courseLists {
            id
            name
            free
            totalChapters
            slug
            publishedAt
            chapter {
                id
                name
                shortDesc
                youtubeUrl
            }
            banner {
                url
            }
        }
    }
    `;
    try {
        const result = await request(MASTER_URL, query);
        return result;
    } catch (error) {
        console.error('Error fetching all course lists:', error);
        throw error;
    }
};

const getSideBanner = async () => {
    const query = gql`
    query GetSidebanner {
        sideBanners {
            id
            name
            banner {
                id
                url
            }
            url
        }
    }
    `;
    try {
        const result = await request(MASTER_URL, query);
        return result;
    } catch (error) {
        console.error('Error fetching side banner:', error);
        throw error;
    }
};

const getCourseById = async (courseId) => {
    const query = gql`
    query MyQuery($slug: String!) {
      courseList(where: { slug: $slug }) {
        name
          updatedBy {
              id
          }
          banner {
              url
          }
          chapter {
              ... on Chapter {
                  id
                  name
                  video {
                      url
                  }
                  shortDesc
              }
          }
          description
          slug
      }
  }
  
    `;
    try {
        const variables = { slug: courseId };
        const result = await request(MASTER_URL, query, variables);
        return result;
    } catch (error) {
        console.error('Error fetching course by ID:', error);
        throw error;
    }
};

export default {
    getAllCourseList,
    getSideBanner,
    getCourseById,
};
