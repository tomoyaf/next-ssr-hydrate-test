import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface UseMemoProps {
  deadline: string;
}

const UseMemo: React.VFC<UseMemoProps> = ({ deadline }) => {
  const isExpired = React.useMemo(() => {
    console.log(new Date(deadline));
    return new Date() > new Date(deadline);
  }, [deadline]);
  return (
    <div className="flex flex-col max-w-full w-min py-6 justify-center items-start">
      <A href={isExpired ? "good" : "bad"}>useMemo</A>
      <div className="w-full pt-6 overflow-scroll">
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
