import React from "react";
import A from "./A";

export interface GoodComponentProps {
  deadline: string;
}

const GoodComponent: React.VFC<GoodComponentProps> = ({ deadline }) => {
  const isExpired = React.useMemo(
    () => new Date() > new Date(deadline),
    [deadline]
  );
  return (
    <div className="flex py-6">
      <A href={isExpired ? "good" : "bad"} css="bg-blue-500 text-white">
        good
      </A>
    </div>
  );
};

export default GoodComponent;
