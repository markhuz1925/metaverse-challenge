import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Main from "../components/Main";

export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen bg-black relative">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Main onClick={logout} address={user.attributes.ethAddress} />
      </div>
    </div>
  );
}
