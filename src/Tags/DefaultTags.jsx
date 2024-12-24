import React from "react";
import styles from "./DefaultTags.module.css";
import { formatDate } from "../utils/formatDate";

function DefaultTags({ tags, error }) {
  const formatDescription = (description) => {
    if (!description) return null;
    const cleanedDescription = description.replace(
      /SDBApi provider-related matters/g,
      ""
    );
    const parts = cleanedDescription.split(/[-*]\s/).filter((part) => part.trim());
    return parts.map((part, index) => <li key={index}>{part}</li>);
  };

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div id="contents-to-pdf">
          <ul>
            {tags.map((tag) => (
              <p key={tag.name}>
                <hr />
                <h2 className={styles.tag}>{tag.name}</h2>
                {tag.release && (
                  <p className={styles.content}>
                    <strong>Title :</strong> {tag.commit.title}
                    <br />
                    <strong>Date :</strong> {formatDate(tag.commit.authored_date)}
                    <br />
                    <p className={styles.description}>
                      <strong>Description :</strong>
                    </p>
                    <ul>{formatDescription(tag.release.description)}</ul>
                  </p>
                )}
              </p>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DefaultTags;
