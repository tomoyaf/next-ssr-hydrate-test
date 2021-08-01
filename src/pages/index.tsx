import { GetServerSideProps } from "next";

export interface HomeProps {
  deadline: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { deadline } = process.env;
  const defaultDeadline = "2021/08/01 15:10";
  return {
    props: {
      deadline: deadline == null ? defaultDeadline : deadline,
    },
  };
};

const Home: React.VFC<HomeProps> = ({ deadline }) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const isExpired = now > deadlineDate;
  console.log("-------- debugg ----------");
  console.log(now);
  console.log(deadlineDate);
  console.log(now > deadlineDate);
  return (
    <div>
      <a href={isExpired ? "https://google.com" : "https://youtube.com"}>
        link
      </a>
    </div>
  );
};

export default Home;
