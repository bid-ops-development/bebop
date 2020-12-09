import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export function Code({ snippet }: { snippet: string; }) {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {snippet}
    </SyntaxHighlighter>
  );
}
