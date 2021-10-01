import React from "react";
import Head from "next/head";
import teamStyles from "../../styles/team.module.css";
function Team() {
  return (
    <div className={teamStyles.body}>
      <Head>
        <title>Nnnn ext App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Nwalo is a boss</h1>
    </div>
  );
}

export default Team;
