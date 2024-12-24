import React, { useState, useEffect } from "react";
import "./App.css";
import JavaServerTags from "./Tags/JavaServerTags";
import JupiterAgentTags from "./Tags/JupiterAgentTags";
import JavaApiTags from "./Tags/JavaApiTags";
import JavaFilterTags from "./Tags/JavaFilterTags";
import CApiTags from "./Tags/CApiTags";
import { handlePdfDownload } from "./utils/pdfUtils";

const TabButton = ({ label, onClick, isActive }) => (
  <button
    id={`tagbutton`}
    className={`tab-button ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const projectIds = {
    JavaServerTags: 74,
    JupiterAgentTags: 150,
    JavaApiTags: 151,
    JavaFilterTags: 152,
    CApiTags: 182,
  };

  const tabLabels = {
    JavaServerTags: "Java Server",
    JupiterAgentTags: "Jupiter Agent",
    JavaApiTags: "Java API",
    JavaFilterTags: "Java Filter",
    CApiTags: "C_API",
  };

  useEffect(() => {
    const fetchTags = async () => {
      if (!activeTab) return;

      try {
        const projectId = projectIds[activeTab];
        const response = await fetch(
          `http://10.140.20.60/api/v4/projects/${projectId}/repository/tags?page=1&per_page=50`,
          {
            method: "GET",
            headers: {
              "PRIVATE-TOKEN": "xaExcm4JmxTzWsyk8FkN",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching tags: ${response.status}`);
        }

        const data = await response.json();
        setTags(data);
        setError(null);
      } catch (err) {
        setTags([]);
        setError(err.message);
      }
    };

    fetchTags();
  }, [activeTab]);

  const downloadPdf = () => {
    const element = document.getElementById("contents-to-pdf");
    const label = tabLabels[activeTab] || "Unknown"; // 활성 탭의 label 가져오기
    const filename = `${label.replace(/\s+/g, "_")}_tags.pdf`; // 파일 이름 생성
    handlePdfDownload(element, { filename });
  };

  return (
    <div>
      <h1 className="title">GitLab Repository Tags</h1>
      <button className="pdf" onClick={downloadPdf}>
        PDF 다운로드
      </button>
      <div className="Tags">
        {[
          { id: "JavaServerTags", label: "Jupiter Server" },
          { id: "JupiterAgentTags", label: "Jupiter Agent" },
          { id: "JavaApiTags", label: "Java API" },
          { id: "JavaFilterTags", label: "Java Filter" },
          { id: "CApiTags", label: "C_API" },
        ].map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className="Main">
        {activeTab === "JavaServerTags" && (
          <JavaServerTags tags={tags} error={error} />
        )}
        {activeTab === "JupiterAgentTags" && (
          <JupiterAgentTags tags={tags} error={error} />
        )}
        {activeTab === "JavaApiTags" && (
          <JavaApiTags tags={tags} error={error} />
        )}
        {activeTab === "JavaFilterTags" && (
          <JavaFilterTags tags={tags} error={error} />
        )}
        {activeTab === "CApiTags" && <CApiTags tags={tags} error={error} />}
      </div>
    </div>
  );
}

export default App;
