import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Rounak Kishan",
  description: "Created by Rounak Kishan",
};

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
