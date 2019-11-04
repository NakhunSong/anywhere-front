import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as editActions } from 'reducers/edit';
import { actionCreators as memoActions } from 'reducers/memo';
import PageTemplate from 'components/common/PageTemplate';
import Memo from 'components/memo/Memo';
import ManageButton from 'components/memo/ManageButton';
import { IStoreState } from 'reducers';

interface IProps {
  history: any;
  match: any;
  EditActions: typeof editActions;
  MemoActions: typeof memoActions;
  memoId: number;
  title: string;
  content: string;
}

class MemoContainer extends PureComponent<IProps> {
  componentDidMount(): void {
    this.initialize();
  }

  initialize = (): void => {
    const { match, MemoActions } = this.props;
    const { memoId } = match.params;
    MemoActions.getMemo(parseInt(memoId, 10));
  }

  handleRemove = (): void => {
    const {
      history,
      EditActions,
      match,
    } = this.props;
    const { memoId } = match.params;
    EditActions.removeMemo(parseInt(memoId, 10));
    history.goBack();
  }

  handleModify = (): void => {
    const {
      history,
      EditActions,
      memoId,
      title,
      content,
    } = this.props;
    const memo = {
      memoId,
      title,
      content,
      isModify: true,
    };
    EditActions.getMemo(memo);
    history.push('/edit');
  }

  render() {
    const { memoId, title, content } = this.props;
    const { handleRemove, handleModify } = this;
    return (
      <PageTemplate
        button={(
          <ManageButton
            memoId={memoId}
            handleRemove={handleRemove}
            handleModify={handleModify}
          />
        )}
      >
        <Memo
          memoId={memoId}
          title={title}
          content={content}
        />
      </PageTemplate>
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    memoId: state.memo.memoId,
    title: state.memo.title,
    content: state.memo.content,
  }),
  (dispatch) => ({
    EditActions: bindActionCreators(editActions, dispatch),
    MemoActions: bindActionCreators(memoActions, dispatch),
  }),
)(MemoContainer);
