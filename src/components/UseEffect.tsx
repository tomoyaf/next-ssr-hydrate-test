import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface UseEffectProps {
  deadline: string;
}

const UseEffect: React.VFC<UseEffectProps> = ({ deadline }) => {
  const [isExpired, setIsExpired] = React.useState<boolean>();
  React.useEffect(() => {
    console.log("---------- useEffect");
    console.log(new Date(deadline));
    setIsExpired(new Date() > new Date(deadline));
  }, [deadline]);
  return (
    <div className="flex flex-col max-w-full py-6 justify-center items-start w-min">
      <A href={isExpired ? "good" : "bad"}>useEffect</A>
      <div className="w-full pt-6 overflow-scroll">
        <SyntaxHighlighter language="javascript">
          {`const [isExpired, setIsExpired] = React.useState<boolean>();
React.useEffect(() => {
  setIsExpired(new Date() > new Date(deadline));
}, [deadline]);`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseEffect;
