import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import MemoItem from "../MemoItem";
import { IMemoState } from "reducers/memo";

interface IProps {
  list: IMemoState[];
}

const MemoList = ({ list }: IProps) => {
  return (
    <div className="memolist-container">
      {list.map((memo) => <Link to={`/memo/${memo.id}`} key={memo.id}><MemoItem memo={memo} /></Link>)}
    </div>
  );
};

export default MemoList;
