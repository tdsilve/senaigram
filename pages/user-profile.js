import React, { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Header from "../src/components/Header";
import axios from "axios";
import Post from "../src/components/Post";
import Image from "next/image";

export default function UserProfile({photos}) {
  // const router = useRouter();
  // const userEmail = router.query.userEmail;

  // const [data, setData] = useState();
  // const [photos, setPhotos] = useState([]);
  // const url = `https://senaigram.herokuapp.com/users/${userEmail}`;
  // console.log(url);
  // console.log(userEmail);

  // useEffect(function () {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("User Profile Error:", error);
  //     });
  // }, []);

  console.log("Data1:", photos);

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
        {noData(photos) ? (
          <h1>Loading...</h1>
        ) : (
          photos?.map((post) => {
            <div key={post.id}>
              1
              <Post
                imgUrl={post.url}
                description={post.text}
                userEmail={'florinda'}
              />
            </div>;
          })
        )}
      </main>
    </div>
  );
}

function noData(data) {
  return data == undefined || !data.length;
}

export async function getServerSideProps() {
  // const router = Router;
  const userEmail = 'florinda';
  const url = `https://senaigram.herokuapp.com/users/${userEmail}`;
  const res = await fetch(url)
  const data = await res.json();
  const photos = data.photos;
  return {
    props: {
      photos: data
    }, // will be passed to the page component as props
  }
}