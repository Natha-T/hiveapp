import "./globals.css";

import { NavBar } from "./components/nav-bar";

export const metadata = {
  title: "GoodHive",
  description: "Freelancing for the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
