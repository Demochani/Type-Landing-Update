import React, { useState, useRef, useMemo, useEffect } from "react";
import "../../styles/styles.scss";
import  PostList from "./components/PostList"
import PostFilter from "../Filter/index";
import { usePosts } from "../../utils/hooks/usePosts";
import PostService from "../../utils/API/index";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../../utils/hooks/useFetching";
import { getPageCount, getPagesArray } from "../../utils/pages/index";
import CurrentTemp from "../Temprature/index";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../types/types";

const  App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useSearchParams();
  const postQuery = filter.get("post") || "";
  const searchedPosts:IPost[] = usePosts(posts, postQuery);
  const [totalCount, setTotalCount] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);
  const lastElement = useRef<HTMLDivElement>();
  const observer = useRef<IntersectionObserver>();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit:number, page:number) => {
      const response = await PostService.getInteresting(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      console.log(response.headers["x-total-count"]);
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  console.log("totalPages: ", totalPages);
  console.log("pagesArray: ", pagesArray);

  useEffect(() => {
    if (isPostLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries:[IntersectionObserverEntry], observer:IntersectionObserver) {
      console.log(entries, "entries is");
      const [IntersectionObserverEntry] = entries
      if (IntersectionObserverEntry.isIntersecting && page < totalPages) {
        setPage(page + 1);
        console.log(page);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  return (
    <div className="wrapper">
      <div className="temp-container">
        <CurrentTemp />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList posts={searchedPosts} />
      <div ref={lastElement} style={{ height: 20, background: "none" }}></div>
      {isPostLoading &&
        (!posts.length ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </div>
        ) : (
          posts.length
        ))}
    </div>
  );
}

export default App;