import React from "react";
import "../../../styles/styles.scss";
// import {IPost} from "../../../types/types"

interface ItemProps {
  title:string
}

const PostItem: React.FC<ItemProps> = (post) => {
  return (
    <div className="interesting-post">
      <div className="interesting-post-img">
        <img src="https://www.seekpng.com/png/detail/55-556729_wutang-logo-licences-products-wu-tang-clan-logo.png" />
      </div>
      <div className="interesting-post-content">
        <div className="data">Feb 23   8 min read</div>
        <div className="interesting-post-title">
        {post.title}
        </div>
        <div className="interesting-post-text">
          War of the masses, the outcome disastrous Many of the victim families
          save their ashes A million names on walls, 
        </div>
      </div>
    </div>
    
  );
};

export default PostItem;