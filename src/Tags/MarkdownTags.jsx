import React from "react";
import styles from "./MarkdownTags.module.css";
import { formatDate } from "../utils/formatDate";

function MarkdownTags({ tags, error }) {
  const formatDescription = (description) => {
    if (!description) return null;
  
    // Remove the unwanted phrase
    const cleanedDescription = description.replace(/SDBApi provider-related matters/g, "");
  
    // Split the description into parts based on patterns for headings and list items
    const parts = cleanedDescription.split(/\n|[-*]\s/).filter((part) => part.trim());
  
    // Map through the parts and render accordingly
    return parts.map((part, index) => {
      if (part.startsWith("###")) {
        return (
          <h3 key={`h3-${index}`} className={styles.subheading}>
            {part.slice(3).trim()}
          </h3>
        );
      } else {
        return <li key={`li-${index}`}>{part}</li>;
      }
    });
  };

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div id="contents-to-pdf">
          <ul>
            {tags.map((tag) => (
              <div key={tag.name}>
                <hr />
                <h2 className={styles.tag}>{tag.name}</h2>
                {tag.release && (
                  <div className={styles.content}>
                    <strong>Title :</strong> {tag.commit.title}
                    <br />
                    <strong>Date :</strong> {formatDate(tag.commit.authored_date)}
                    <br />
                    <div className={styles.description}>
                      <strong>Description :</strong>
                    </div>
                    <ul>{formatDescription(tag.release.description)}</ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MarkdownTags;