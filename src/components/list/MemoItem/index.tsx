import React from 'react';

import { IMemoState } from 'reducers/memo';
import './style.scss';

interface IProps {
  memo: IMemoState;
}

const MemoItem = ({ memo }: IProps) => {
  return (
    <div
      className="memo-container"
    >
      <h2 className="memo-title">
        {memo.title.length < 21 ? memo.title : `${memo.title.substring(0, 21)}...` }
      </h2>
      <div></div>
      <div className="memo-content">
        {memo.content.length < 60
          ? memo.content
          : (
            <div>
              {memo.content.substring(0, 60)}
              <p> . . .</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default MemoItem;
