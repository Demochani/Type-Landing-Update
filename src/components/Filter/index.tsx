import React from "react";
import "../../styles/styles.css";

interface PostFilterProps {
  filter?: any;
  setFilter: (filter: any) => any;
}

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {

  

  return (
    <input
      className="filter-input"
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      placeholder="Поиск..."
    />
  );
};

export default PostFilter;
