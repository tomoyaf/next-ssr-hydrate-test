import { GetServerSideProps } from "next";
import React from "react";
import A from "components/A";

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
    <div className="flex py-6">
      <A href="good">good</A>
    </div>
    <div className="flex py-6">
      <A href="bad">bad</A>
    </div>
  </div>
);

export default Home;
