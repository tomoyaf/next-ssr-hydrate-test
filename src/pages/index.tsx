import { GetServerSideProps } from "next";
import React from "react";
import A from "components/A";
import Simple from "components/Simple";
import UseEffect from "components/UseEffect";
import UseMemo from "components/UseMemo";

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
  <div className="flex flex-col min-w-screen min-h-screen justify-center items-center">
    <div className="flex flex-col py-12 px-10 max-w-full w-96">
      <h1 className="text-5xl text-gray-700 font-bold leading-10 py-6">Good</h1>
      <div className="w-full">
        <UseEffect />
      </div>
    </div>
    <div className="flex flex-col py-12 px-10 max-w-full w-96">
      <h1 className="text-5xl text-gray-700 font-bold py-6">Bad</h1>
      <div className="w-full">
        <Simple />
        <UseMemo />
      </div>
    </div>
  </div>
);

export default Home;
