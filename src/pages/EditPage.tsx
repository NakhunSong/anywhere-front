import React from 'react';
import EditContainer from 'containers/edit/EditContainer';

interface IProps {
  history: any;
}

const EditPage = ({ history }: IProps) => {
  return (
    <EditContainer
      history={history}
    />
  );
};

export default EditPage;
