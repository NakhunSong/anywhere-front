import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as editActions } from 'reducers/edit';
import { actionCreators as listActions } from 'reducers/list';
import PageTemplate from 'components/common/PageTemplate';
import EditView from 'components/edit/EditView';
import Button from 'components/common/Button';
import { IStoreState } from 'reducers';

interface IProps {
  history: any;
  EditActions: typeof editActions;
  id: number;
  title: string;
  content: string;
  isModify: boolean;
}

class EditContainer extends PureComponent<IProps> {
  handleChangeTitle = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    const { EditActions } = this.props;
    EditActions.changeTitle(value);
  }

  handleChangeContent = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { EditActions } = this.props;
    EditActions.changeContent(value);
  }

  handleConfirmButton = () => {
    const {
      history,
      EditActions,
      id,
      title,
      content,
      isModify,
    } = this.props;

    const memo = {
      id,
      title,
      content,
    };
    if (isModify) {
      EditActions.editMemo(memo);
      history.push(`/memo/${id}`);
      return;
    }
    EditActions.addMemo(memo);
    history.push(`/memo/${id}`);
  }

  render() {
    const { handleChangeTitle, handleChangeContent, handleConfirmButton } = this;
    const { title, content } = this.props;

    return (
      <PageTemplate
        button={
          <Button big name="저장" handleClick={handleConfirmButton} />
        }
      >
        <EditView
          title={title}
          content={content}
          handleChangeTitle={handleChangeTitle}
          handleChangeContent={handleChangeContent}
        />
      </PageTemplate>
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    id: state.edit.id,
    title: state.edit.title,
    content: state.edit.content,
    isModify: state.edit.isModify,
  }),
  (dispatch) => ({
    EditActions: bindActionCreators(editActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(EditContainer);
