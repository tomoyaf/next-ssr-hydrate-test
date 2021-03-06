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
  return (
    <a
      className={
        "px-11 py-6 text-4xl shadow-md rounded font-bold text-center border text-gray-700 " +
        (props.css ?? "")
      }
      {...props}
    >
      {props.children}
    </a>
  );
};

export default A;
