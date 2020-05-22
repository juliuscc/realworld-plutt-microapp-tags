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
            }}
            className="tag-default tag-pill"
          >
            <span
              onClick={(e) => {
                e.preventDefault();
                onClick(tag);
              }}
            >
              {tag}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Tags;
