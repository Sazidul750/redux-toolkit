import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../servies/UserSlice";

function UsersView() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>User Section</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>api failed: Error 404</h3>}
      <section>
        {users &&
          users.map((user) => {
            const { title, id, body } = user;
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

export default UsersView;
