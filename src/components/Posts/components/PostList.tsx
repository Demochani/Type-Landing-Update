import React from "react";
import PostItem from "./PostItem";
import "../../../styles/styles.scss";
import { IPost } from "../../../types/types";

interface PostListProps{
  posts:IPost
}

const PostInteresting: React.FC<IPost> = ({ posts }) => {
  if (!posts.length) {
    return (
      <p className="no-posts">
        there are no posts with this name..... sad.......
      </p>
    );
  }

  return (
    <div className="interesting-posts-container">
      <hr  />
      <strong >
        INTERESTING
      </strong>
      <div className="interesting-posts">
        {posts.map((post:IPost, index:number) => (
          <PostItem number={index + 1} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostInteresting;