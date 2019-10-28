import React from "react";
import "./style.scss";

interface IProps {
  props: {
    children: React.ReactNode,
    value: string,
  };
}

export const BlockQuote = ({ props }: IProps) => {
  return <div className="blockquote-render">{props.children}</div>;
};

export const Code = ({ props }: IProps) => {
  return (
    <pre className="code-render">
      <code>
        {props.value}
      </code>
    </pre>
  );
};

export const Table = ({ props }: IProps) => {
  return (
    <table className="table-render">
      {props.children}
    </table>
  );
};

export const TableCell = ({ props }: IProps) => {
  return (
    <td className="table-cell-render">
      {props.children}
    </td>
  );
};

export const Inline = ({ props }: IProps) => {
  return <span className="inline-render">{props.value}</span>;
};
