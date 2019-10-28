import React from "react";
import "./style.scss";
import Markdown from "components/common/Markdown";
import { IMemoState } from "reducers/memo";

const Memo = ({
  title,
  content,
}: IMemoState) => {
  return (
    <div className="memopage-container">
      <div className="memopage-title">
        {title}
      </div>
      <div className="memopage-content">
        <Markdown content={content} />
      </div>
    </div>
  );
};

export default Memo;
