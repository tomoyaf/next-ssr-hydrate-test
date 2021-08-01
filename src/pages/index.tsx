import { GetServerSideProps } from "next";

export interface HomeProps {
  name: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { name } = process.env;
  return {
    props: {
      name,
    },
  };
};

const Home: React.VFC<HomeProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Home;
