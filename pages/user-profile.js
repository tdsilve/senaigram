import React, { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Header from "../src/components/Header";
import axios from "axios";
import Post from "../src/components/Post";
import Image from "next/image";

export async function getStaticProps() {
  const url = `https://senaigram.herokuapp.com/users/florinda`;
  const res = await fetch(url)
  const data = await res.json();
  return {
    props: {
      data: data
    }, 
  }
}

export default function UserProfile({data}) {
  console.log(data)
  return (
    <div>
      <Header />
      <div className="flex items-center h-36 justify-center p-3 shadow-sm border-b bg-white mb-2">
        <Image
          src="/pexel.jpeg"
          width={100}
          height={100}
          alt="user profile picture"
          objectFit="cover"
          className="rounded-full "
        />
        <div className="ml-10">
          <h1>Dona Florinda</h1>
          <p>Public figure</p>
          <p>Stay at home mom</p>
        </div>
      </div>
      <main className="m-auto md:max-w-3xl xl:max-w-6xl max-auto">
        {
          data?.photos.map((post) => { 
           return ( <div key={post.id}>
              <Post
                imgUrl={post.url}
                description={post.text}
                userEmail={'florinda'}
              />
            </div>
          )})
        }
      </main>
    </div>
  );
}


