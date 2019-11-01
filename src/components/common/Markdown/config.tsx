import React from 'react';
import './style.scss';

export const BlockQuote = (props: any) => {
  return <div className="blockquote-render">{props.children}</div>;
};

export const Code = (props: any) => {
  return (
    <pre className="code-render">
      <code>
        {props.value}
      </code>
    </pre>
  );
};

export const Table = (props: any) => {
  return (
    <table className="table-render">
      {props.children}
    </table>
  );
};

export const TableCell = (props: any) => {
  return (
    <td className="table-cell-render">
      {props.children}
    </td>
  );
};

export const Inline = (props: any) => {
  return <span className="inline-render">{props.value}</span>;
};
