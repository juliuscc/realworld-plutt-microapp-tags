import React from "react";

import LoadingSpinner from "./LoadingSpinner";

const Tags = ({ tags, setPage }) => {
  if (!tags) return <LoadingSpinner />;

  return (
    <div className="tag-list">
      {tags.map((tag) => {
        return (
          <a key={tag} href={`/?tag=${tag}`} className="tag-default tag-pill">
            <span onClick={() => setPage(0)}>{tag}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Tags;
