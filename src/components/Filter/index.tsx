import React from "react";
import "../../styles/styles.css";

interface PostFilterProps {
  filter: URLSearchParams;
  setFilter: (filter: URLSearchParams): => string;
}

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.search.value;
    setFilter({ post: query });
  };

  return (
    <form className="filter-form" autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" placeholder="Search..." />
    </form>
  );
};

export default PostFilter;
