import React from "react";

interface IProps {
  children: React.ReactNode;
}

const EditTemplate = ({ children }: IProps) => {
  return (
    <div className="edit-template">
      {children}
    </div>
  );
};

export default EditTemplate;
