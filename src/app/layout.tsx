// import { Component } from "react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import Toastr CSS

import "../../public/css/bootstrap.min.css";
import "../../public/fonts/stylesheet.css";
import "../../public/css/animation.css";
import "../../public/css/custom.css";
import "../../public/css/userStyle.css";
import "../../public/css/style.css";
import "../../public/css/slider.css";
import "../../public/css/responsive.css";

// import "../../public/images/Nextpet-imgs/big-logo.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
