import { Vazirmatn } from "next/font/google";
import "./base/reset.scss";
import Header from "./layout/Header";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "صنایع چوب مهرشاد | کابینت سازی مهرشاد",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vazir.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
