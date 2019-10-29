import React from 'react';
import Markdown from 'components/common/Markdown';
import { IMemoState } from 'reducers/memo';
import './style.scss';

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
