import React from "react";

import LoadingSpinner from "./LoadingSpinner";

const Tags = ({ tags, onClick }) => {
  if (!tags) return <LoadingSpinner />;

  return (
    <div className="tag-list">
      {tags.map((tag) => {
        return (
          <a key={tag} href={`/?tag=${tag}`} className="tag-default tag-pill">
            <span onClick={() => onClick(tag)}>{tag}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Tags;
