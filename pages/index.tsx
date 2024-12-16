import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-[#064E3B] flex flex-col items-center justify-center min-h-screen text-center text-white">
      <Head>
        <title>Frog on Hyperliquid</title>
      </Head>

      {/* Logo with Hover Effect */}
      <div className="mb-8 p-4 rounded-md transform transition duration-300 ease-in-out hover:bg-[#116655] hover:shadow-lg hover:scale-110">
        <img src="/frog-no-bg.png" alt="Frog Logo" className="w-40 h-auto" />
      </div>

      {/* Name */}
      <h1 className="text-5xl font-bold text-[#D1FAE5] transform transition duration-300 ease-in-out hover:scale-110">
        FROG
      </h1>

      {/* Tagline */}
      <p className="text-xl text-[#A7F3D0] mt-4 transform transition duration-300 ease-in-out hover:scale-110">
        Frog on Hyperliquid
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <a
          href="https://t.me/HypurrFunBot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 bg-[#34D399] text-[#064E3B] font-bold rounded-md hover:bg-[#059669] transition duration-300 transform hover:scale-110 ease-in-out"
        >
          <FaTelegramPlane size={20} className="mr-2" />
          Trade on Hypurr Fun
        </a>
        <a
          href="https://x.com/FrogOnHl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 bg-[#34D399] text-[#064E3B] font-bold rounded-md hover:bg-[#059669] transition duration-300 transform hover:scale-110 ease-in-out"
        >
          <FaXTwitter size={20} className="mr-2" />
          Follow on X
        </a>
      </div>
    </div>
  );
}
