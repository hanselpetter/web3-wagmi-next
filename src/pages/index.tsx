import type { NextPage } from "next";
import Header from "../components/header";
import dynamic from "next/dynamic";

const DisconnectedIntro = dynamic(
  () => import("../components/disconnectedIntro") as any,
  {
    ssr: false,
  }
);

const PfpList = dynamic(() => import("../components/pfpList") as any, {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <main>
      {/* Header include Wallet Connection */}
      <Header />

      {/* Disconnected Status - include connect button */}
      <DisconnectedIntro /> 

      {/* Fetch and show component the NFTs */}
      <PfpList />
    </main>
  );
};

export default Home;
