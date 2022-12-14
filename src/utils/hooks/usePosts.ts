import React, { useMemo } from "react";
import { IPost } from "../../types/types";

export const usePosts = (posts:IPost[], query:any ) => {
  const searchedPosts:IPost[] = useMemo(() => {
    return [...posts].filter((post) => {
  
      // if (!filter.get("post")) return true;
      
      return post.title.toLowerCase().includes(query.toLowerCase());
    })
  }, [posts, query]);
  return searchedPosts;
};














// import React, { useMemo } from "react";

// export const usePosts = (posts, filter ) => {
//   const searchedPosts = useMemo(() => {
//     return [...posts].filter((post) =>
//       post.title.toLowerCase().includes(filter.toLowerCase())
//     );
//   }, [posts, filter]);
//   return searchedPosts;
// };





// import React, { useMemo } from "react";

// export const usePosts = (posts, filter ) => {
//   const searchedPosts = useMemo(() => {
//     return [...posts].filter((post) =>
//       post.title.toLowerCase().includes(filter.get('post').toLowerCase())
//     );
//   }, [posts, filter]);
//   return searchedPosts;
// };