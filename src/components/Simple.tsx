import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface SimpleProps {
  deadline: string;
}

const Simple: React.VFC<SimpleProps> = ({ deadline }) => {
  const isExpired = new Date() > new Date(deadline);
  return (
    <div className="flex flex-col py-6 justify-center items-center px-10">
      <A href={isExpired ? "good" : "bad"}>simple</A>
      <div className="py-6">
        <SyntaxHighlighter language="javascript">
          {`const isExpired = new Date() > new Date(deadline);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Simple;
