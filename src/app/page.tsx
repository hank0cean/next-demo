import HomeView from "@/containers/Views/Home";
import i18n from "@/utils/i18n";
// import withGuest from '@/utils/withGuest';
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>{i18n.texts.home.title}</title>
    </Head>
    <HomeView />
  </>
);

export default HomePage;
