import { Fustat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const fustat = Fustat({
  weight: ['200', '300', '400', '500', '600', '700' , '800'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster/>
      <body className={`${fustat.className} `}>
        {children}
      </body>
    </html>
  );
}
