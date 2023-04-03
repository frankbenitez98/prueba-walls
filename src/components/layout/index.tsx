import React, { FC } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="flex-col w-full justify-center">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
