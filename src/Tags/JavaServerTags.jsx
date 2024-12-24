import React from "react";
import MarkdownTags from "./MarkdownTags";

function JavaServerTags({ tags, error }) {
  return (
    <div id="contents-to-pdf">
      <h2>Jupiter Server</h2>
      <MarkdownTags tags={tags} error={error} />
    </div>
  );
}

export default JavaServerTags;