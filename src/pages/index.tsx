import { GetServerSideProps } from "next";
import React from "react";
import BadComponent from "components/BadComponent";
import GoodComponent from "components/GoodComponent";

export interface HomeProps {
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

const Home: React.VFC<HomeProps> = ({ deadline }) => (
  <div className="flex flex-col w-screen h-screen justify-center items-center">
    <GoodComponent deadline={deadline} />
    <BadComponent deadline={deadline} />
  </div>
);

export default Home;
