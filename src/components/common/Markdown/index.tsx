import {
  BlockQuote,
  Code,
  Table,
  TableCell,
  Inline,
} from './config';
import React from 'react';
import MarkDownRender from 'react-markdown/with-html';
import breaks from 'remark-breaks';

interface IProps {
  content?: string;
}

const Markdown = ({ content }: IProps) => {
  return (
    <MarkDownRender
      source={content}
      skipHtml={false}
      escapeHtml={false}
      plugins={[breaks]}
      renderers={{
        blockquote: BlockQuote,
        code: Code,
        inlineCode: Inline,
        table: Table,
        tableCell: TableCell,
      }}
    />
  );
};

export default Markdown;
