import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import Navbar from "./Header";
import Footer from "./Footer";
import Box from "./common/Box";
import Image from "./common/Image";
import Bg1 from "../assets/images/bg1.png";
import Bg2 from "../assets/images/bg2.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box cssClasses={["site-container"]}>
      <Image src={Bg1} cssClasses={["background-1"]} />
      <Image src={Bg2} cssClasses={["background-2"]} />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default Layout;
