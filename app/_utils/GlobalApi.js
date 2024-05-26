import { gql, request } from 'graphql-request';

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

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
        }
      }
      
    `;
    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getAllCourseList
};
