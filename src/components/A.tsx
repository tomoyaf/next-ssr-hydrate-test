import React from "react";

export interface AProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  css?: string;
}

const A: React.VFC<AProps> = (props) => {
  console.log(props);
  return (
    <a
      className={
        "px-11 py-6 text-4xl shadow-xl rounded font-bold w-60 text-center " +
        (props.css ?? "")
      }
      {...props}
    >
      {props.children}
    </a>
  );
};

export default A;
