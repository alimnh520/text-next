import "./globals.css";
import ChildCom from "./ChildCom";
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Dress collection",
  description: "All kind of dresses",
  icons: {
    icon: '/logo-food.avif'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ChildCom children={children}/>
      </body>
    </html>
  );
}
