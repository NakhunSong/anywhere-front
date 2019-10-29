import React from 'react';
import { Icon, Popover } from 'antd';
import Button from 'components/common/Button';
import './style.scss';

interface IProps {
  memoId: number;
  handleRemove: () => void | null;
  handleModify: () => void | null;
}

const ManageButton = ({ handleRemove, handleModify }: IProps) => {
  return (
    <Popover
      placement="bottomRight"
      content={(
        <div className="popover-button-wrap">
          <Button color="black" name="삭제" handleClick={handleRemove} />|
          <Button color="black" name="수정" handleClick={handleModify} />
        </div>
      )}
      trigger="click"
    >
      <Icon
        type="more"
        className="big"
        style={{ color: "white" }}
      />
    </Popover>
  );
};

export default ManageButton;
