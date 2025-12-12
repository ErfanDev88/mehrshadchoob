import "../../dist/main.css";
import { Metadata } from "next";
import ScrollToTop from "./components/ScrollToTop";
import WorkSamplesContext from "./context/WorkSamplesContext";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import AnimCursor from "./components/AnimCursor";
import OverlayMenu from "./layout/OverlayMenu";

export const metadata = {
  title: "صنایع چوب مهرشاد | کابینت سازی مهرشاد",
  description:
    "کابینت سازی با ارزانترین قیمت, کابینت سازی مهرشاد, با کیفیت ترین کابینت, انواع کابینت, صنایع چوب مهرشاد, تولید کابینت ام د اف, ساخت درب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <WorkSamplesContext>
          <AnimCursor />
          <Header />
          <Navbar />
          {children}
          <ScrollToTop />
        </WorkSamplesContext>
      </body>
    </html>
  );
}
