// eslint-disable-file
import React from "react";

import LoadingSpinner from "./LoadingSpinner";

const Tags = ({ tags, onClick }) => {
  if (!tags) return <LoadingSpinner />;

  return (
    <div className="tag-list">
      {tags.map((tag) => {
        return (
          <a
            key={tag}
            href={`/?tag=${tag}`}
            onClick={(e) => {
              e.preventDefault();
              onClick(tag);
            }}
            className="tag-default tag-pill"
          >
            {tag}
          </a>
        );
      })}
    </div>
  );
};

export default Tags;
