import Image from "next/image";

import { Inter } from "next/font/google";

import { NavBar } from "./components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-5">
        <h1 className="mt-5 text-2xl">Home Page</h1>
        <p className="my-10 text-lg">
          Get started by clicking on the Design System
        </p>
      </main>

      <footer className="mx-5 text-sm">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by GoodHive
        </a>
      </footer>
    </>
  );
}
