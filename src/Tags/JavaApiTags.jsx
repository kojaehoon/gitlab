import React from "react";
import DefaultTags from "./DefaultTags";

function JavaApiTags({ tags, error }) {
  return (
    <div id="contents-to-pdf">
      <h2>Java API</h2>
      <DefaultTags tags={tags} error={error} />
    </div>
  );
}

export default JavaApiTags;