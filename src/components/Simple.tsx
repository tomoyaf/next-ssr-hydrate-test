import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface SimpleProps {}

const Simple: React.VFC<SimpleProps> = () => {
  const now = new Date();
  console.log("---------- Simple");
  console.log(now);
  return (
    <div className="flex flex-col max-w-full py-6 justify-center items-start w-min">
      <h1 className="">Simple</h1>
      <input
        className="w-full"
        defaultValue={
          now &&
          new Intl.DateTimeFormat("ja", {
            dateStyle: "full",
            timeStyle: "long",
          }).format(now)
        }
      />
      <div className="w-full py-6 overflow-scroll">
        <SyntaxHighlighter language="javascript">
          {`const now = new Date();`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Simple;
