import Head from "next/head";
import Feed from "../src/components/Feed";
import Header from "../src/components/Header";
import { useState } from "react";
import UserProfile from "./user-profile";
export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Senaigram</title>
      </Head>
      <Header />
      <Feed url={`https://senaigram.herokuapp.com/photos`} /> :
    </div>
  );
}
