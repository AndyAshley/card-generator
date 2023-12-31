import "./styles/globals.scss";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const monts = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monts.className}>
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
