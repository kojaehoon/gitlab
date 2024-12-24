import React from "react";
import DefaultTags from "./DefaultTags";

function JavaFilterTags({ tags, error }) {
  return (
    <div id="contents-to-pdf">
      <h2>Java Filter</h2>
      <DefaultTags tags={tags} error={error} />
    </div>
  );
}

export default JavaFilterTags;