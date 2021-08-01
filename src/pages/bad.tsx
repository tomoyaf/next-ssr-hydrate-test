import { GetServerSideProps } from "next";
import React from "react";
import Simple from "components/Simple";
import UseMemo from "components/UseMemo";

export interface BadProps {
  deadline: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { deadline } = process.env;
  const defaultDeadline = "2021/01/01 00:00";
  return {
    props: {
      deadline: deadline == null ? defaultDeadline : deadline,
    },
  };
};

const Bad: React.VFC<BadProps> = ({ deadline }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Simple deadline={deadline} />
      <UseMemo deadline={deadline} />
    </div>
  );
};

export default Bad;
