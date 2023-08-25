import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../servies/PostSlice";

function PostView() {
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Post Section</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { id, title, body } = post;
            return (
              <article key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default PostView;
