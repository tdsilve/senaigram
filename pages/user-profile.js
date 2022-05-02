import React, { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Image from "next/image";

export async function getServerSideProps({query}) {
  const url = `https://senaigram.herokuapp.com/users/${query.userEmail}`;
  const res = await fetch(url)
  const data = await res.json();
  return {
    props: {
      data: data
    }, 
  }
}

export default function UserProfile({data}) {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center p-3 mb-2 bg-white border-b shadow-sm h-36">
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
        <ul className="flex flex-wrap justify-center">
        {
          data?.photos.map((post) => { 
           return ( 
           <li key={post.id} className='m-2'>
             <Image src={post.url} width={400} height={400} alt={post.text}/>
            </li>
          )})
           
        }
        </ul>
      </main>
    </div>
  );
}


