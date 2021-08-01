import React from "react";
import A from "./A";

export interface BadComponentProps {
  deadline: string;
}

const BadComponent: React.VFC<BadComponentProps> = ({ deadline }) => {
  const isExpired = new Date() > new Date(deadline);
  return (
    <div className="flex py-6">
      <A href={isExpired ? "good" : "bad"} css="bg-red-500 text-white">
        bad
      </A>
    </div>
  );
};

export default BadComponent;
