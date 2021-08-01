import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface UseMemoProps {
  deadline: string;
}

const UseMemo: React.VFC<UseMemoProps> = ({ deadline }) => {
  const isExpired = React.useMemo(
    () => new Date() > new Date(deadline),
    [deadline]
  );
  return (
    <div className="flex flex-col py-6 justify-center items-center px-10">
      <A href={isExpired ? "good" : "bad"}>useMemo</A>
      <div className="pt-6">
        <SyntaxHighlighter language="javascript">
          {`const isExpired = React.useMemo(
  () => new Date() > new Date(deadline),
  [deadline]
);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseMemo;
