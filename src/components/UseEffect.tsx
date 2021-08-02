import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

const UseEffect: React.VFC = () => {
  const [now, setNow] = React.useState<Date>();
  React.useEffect(() => {
    console.log("---------- useEffect");
    console.log(now);
    setNow(new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col max-w-full py-6 justify-center items-start w-min">
      <h1 className="">useEffect</h1>
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
          {`const [now, setNow] = React.useState<Date>();
React.useEffect(() => {
  setNow(new Date());
}, []);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseEffect;
