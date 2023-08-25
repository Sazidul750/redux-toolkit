import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../servies/ItemSlice";

function ImageView() {
  const { items, isLoading, error } = useSelector((state) => state.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
    // eslint-disable-next-line
  }, []);
  const datas = items.hits;

  return (
    <div>
      <h2>Items Section</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>404 Error....</h3>}
      <section>
        {datas &&
          datas.map((data) => {
            const { id, previewURL } = data;
            return (
              <article key={id}>
                <p>{id}</p>
                <img src={previewURL} alt="" />
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default ImageView;
