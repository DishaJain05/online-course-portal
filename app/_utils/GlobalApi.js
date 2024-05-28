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
          publishedAt
          chapter {
            ... on Chapter {
              id
              name
              shortDesc
              youtubeUrl
            }
          }
          banner {
            url
          }
          slug
        }
      }
    `;
    try {
        const result = await request(MASTER_URL, query);
        console.log('Fetched all course lists:', result);
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
        console.log('Fetched side banner:', result);
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
            free
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
        console.log(`Fetched course by ID ${courseId}:`, result);
        return result;
    } catch (error) {
        console.error(`Error fetching course by ID ${courseId}:`, error);
        throw error;
    }
};
const enrollToCourse=async(courseId,email)=>{
    const query=gql`
    mutation MyMutation {
        createUserEnrollCourse(
          data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
        ) {
          id
        }
        publishManyUserEnrollCoursesConnection {
            edges {
              node {
                id
              }
            }
        }
      }
    `
    const result=await request(MASTER_URL,query);
    return result;

}

const checkUserEnrolledToCourse=async(courseId,email)=>{
    const query=gql`
    query MyQuery {
        userEnrollCourses(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
          id
        }
      }
      
    `
    const result= await request(MASTER_URL,query);
    return result;
}

export default {
    getAllCourseList,
    getSideBanner,
    getCourseById,
    enrollToCourse,
    checkUserEnrolledToCourse
};
