import React from 'react';
import TextArea from 'react-textarea-autosize';

import Markdown from 'components/common/Markdown';
import './style.scss';

interface IProps {
  title?: string;
  content?: string;
  handleChangeTitle: (e: React.FormEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.FormEvent<HTMLInputElement>) => void;
}

const EditView = ({
  title,
  content,
  handleChangeTitle,
  handleChangeContent,
}: IProps) => {
  return (
    <div className="edit-container">
      <div className="edit-title">
        <TextArea
          onChange={handleChangeTitle}
          placeholder="Title."
          maxLength="140"
          value={title}
        />
      </div>
      <div className="edit-content">
        <div className="edit-content-input">
          <TextArea
            onChange={handleChangeContent}
            placeholder="Content."
            maxLength="2500"
            maxRows={27}
            value={content}
          />
        </div>
        <div className="edit-content-preview">
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
};

export default EditView;
