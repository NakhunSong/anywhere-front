import React from 'react';
import MemoContainer from 'containers/memo/MemoContainer';

interface IProps {
  history: any;
  match: any;
}

const MemoPage = ({ history, match }: IProps) => {
  return (
    <MemoContainer
      history={history}
      match={match}
    />
  );
};

export default MemoPage;
