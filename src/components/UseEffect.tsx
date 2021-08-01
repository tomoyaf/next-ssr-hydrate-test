import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import A from "./A";

export interface UseEffectProps {
  deadline: string;
}

const UseEffect: React.VFC<UseEffectProps> = ({ deadline }) => {
  const [isExpired, setIsExpired] = React.useState<boolean>();
  React.useEffect(() => {
    setIsExpired(new Date() > new Date(deadline));
  }, [deadline]);
  return (
    <div className="flex flex-col py-6 justify-center items-center px-10">
      <A href={isExpired ? "good" : "bad"}>useEffect</A>
      <div className="pt-6">
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
