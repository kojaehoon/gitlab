import React from "react";
import MarkdownTags from "./MarkdownTags";

function CApiTags({ tags, error }) {
  return (
    <div id="contents-to-pdf">
      <h2>C API</h2>
      <MarkdownTags tags={tags} error={error} />
    </div>
  );
}

export default CApiTags;