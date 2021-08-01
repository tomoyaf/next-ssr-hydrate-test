import { GetServerSideProps } from "next";
import React from "react";
import GoodComponent from "components/GoodComponent";

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

const Good: React.VFC<BadProps> = ({ deadline }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <GoodComponent deadline={deadline} />
    </div>
  );
};

export default Good;
