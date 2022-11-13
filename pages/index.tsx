import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5/Section5";
import Section6 from "../components/Section6/Section6";
import Section7 from "../components/Section7/Section7";
import Quote from "../components/Quote/Quote";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mothers Nest</title>
        <meta name='description' content='Mothers nest NGO in Kolkata ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Section1 />
        <section className='mt-48 md:mt-40 pb-40 relative bg-blueGray-100'>
          <Section2 />
          {/* <div className='container mx-auto overflow-hidden pb-20'>
            <Section3 />
            <Section4 />
          </div> */}
          <Quote />
          <Section5 />
        </section>
        <section className='block relative z-1 bg-blueGray-600'>
          <Section6 />
        </section>
        <section className='py-20 bg-blueGray-600 overflow-hidden'></section>
      </>
    </div>
  );
}
