import "./globals.css";

import { NavBar } from "./components/nav-bar";

export const metadata = {
  title: "GoodHive",
  description: "Freelancing for the future",
};

const links = [
  { href: "/talents", label: "Talent" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About Us" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar links={links} />
        {children}
      </body>
    </html>
  );
}
