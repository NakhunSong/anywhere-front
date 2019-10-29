import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as listActions } from 'reducers/list';

import PageTemplate from 'components/common/PageTemplate';
import MemoList from 'components/list/MemoList';
import Button from 'components/common/Button';
import { IMemoState } from 'reducers/memo';
import { IStoreState } from 'reducers';

interface IProps {
  ListActions: typeof listActions;
  memoList: IMemoState[];
}

class ListContainer extends PureComponent<IProps> {
  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { ListActions } = this.props;
    ListActions.getMemoList();
  }

  render() {
    const { memoList } = this.props;
    return (
      <PageTemplate
        to="edit"
        button={<Button big name="추가" />}
      >
        <MemoList
          list={memoList}
        />
      </PageTemplate>
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    memoList: state.list.memoList,
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(ListContainer);
