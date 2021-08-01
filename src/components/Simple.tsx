import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface SimpleProps {
  deadline: string;
}

const Simple: React.VFC<SimpleProps> = ({ deadline }) => {
  const isExpired = new Date() > new Date(deadline);
  console.log("---------- Simple");
  console.log(new Date());
  console.log(new Date(deadline));
  return (
    <div className="flex flex-col max-w-full py-6 justify-center items-start w-min">
      <A href={isExpired ? "good" : "bad"}>simple</A>
      <div className="w-full py-6 overflow-scroll">
        <SyntaxHighlighter language="javascript">
          {`const isExpired = new Date() > new Date(deadline);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Simple;
