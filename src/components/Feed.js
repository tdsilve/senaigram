import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";


export default function Feed() {
  const [data, setData] = useState();

  useEffect(function () {
    axios
      .get("https://senaigram.herokuapp.com/photos")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  if (!noData || data == undefined) {
    return <h1>Loading!</h1>;
  }
  return (
    <main className="m-auto md:max-w-3xl xl:max-w-6xl max-auto">
      <section>
        {data?.map((post) => (
          <div key={post.id}>
            <Post
              imgUrl={post.url}
              description={post.text}
              userEmail={post.user.email}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

function noData(data) {
  return !data.length;
}
