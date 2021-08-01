import React from "react";
import A from "./A";

export interface BadComponentProps {
  deadline: string;
}

const BadComponent: React.VFC<BadComponentProps> = ({ deadline }) => {
  console.log(new Date());
  console.log(new Date(deadline));
  console.log(new Date() > new Date(deadline));
  const isExpired = new Date() > new Date(deadline);
  return (
    <div className="flex py-6">
      <A href={isExpired ? "good" : "bad"}>bad</A>
    </div>
  );
};

export default BadComponent;
