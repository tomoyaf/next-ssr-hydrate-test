import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const UseMemo: React.VFC = () => {
  const now = React.useMemo(() => {
    const now = new Date();
    console.log("---------- useMemo");
    console.log(now);
    return now;
  }, []);
  return (
    <div className="flex flex-col max-w-full w-min py-6 justify-center items-start">
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
      <div className="w-full pt-6 overflow-scroll">
        <SyntaxHighlighter language="javascript">
          {`const now = React.useMemo(() => {
  return new Date();
}, []);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseMemo;
