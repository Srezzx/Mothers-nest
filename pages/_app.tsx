import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Partials/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='relative'>
      <div className='z-50 flex w-full fixed'>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
