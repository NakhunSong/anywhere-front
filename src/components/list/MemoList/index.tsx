import React from 'react';
import { Link } from 'react-router-dom';

import { IMemoState } from 'reducers/memo';
import MemoItem from '../MemoItem';
import './style.scss';

interface IProps {
  list: IMemoState[];
}

const MemoList = ({ list }: IProps) => {
  return (
    <div className="memolist-container">
      {list.map((memo) => <Link to={`/memo/${memo.memoId}`} key={memo.memoId}><MemoItem memo={memo} /></Link>)}
    </div>
  );
};

export default MemoList;
