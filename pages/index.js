import Head from 'next/head'
import Complaint from './components/Complaint'
import Admin from './components/Admin'
import Header from './components/Header'
import Status from './components/Status'
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer")

  return (
    <div className="" >
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Complaint />
      <Status />
      {officer === address && (
        <Admin />
      )}
    </div>
  )
}
