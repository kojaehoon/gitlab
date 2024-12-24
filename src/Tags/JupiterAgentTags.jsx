import React from "react";
import MarkdownTags from "./MarkdownTags";

function JupiterAgentTags({ tags, error }) {
  return (
    <div id="contents-to-pdf">
      <h2>Jupiter Agent</h2>
      <MarkdownTags tags={tags} error={error} />
    </div>
  );
}

export default JupiterAgentTags;