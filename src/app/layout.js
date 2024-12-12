'use client'
import { usePathname } from "next/navigation";
import "./globals.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import LoadingPage from "./components/LadingPage";

export default function RootLayout({ children }) {
  const [loader, setLoader] = useState(true);

  const pathName = usePathname();
  const hideHeaderFooterOn = ['/components/login-form'];
  const shouldHide = hideHeaderFooterOn.includes(pathName);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (loader) {
    return (
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <LoadingPage />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {!shouldHide && <Header />}
        {children}
        {!shouldHide && <Footer />}
      </body>
    </html>
  );
}
