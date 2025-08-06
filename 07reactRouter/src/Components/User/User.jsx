import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function User() {
  const data = useLoaderData();
  // const [data, setData] = useState(0);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/hiteshchoudhary`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <>
      <div className=" text-center m-4 p-8 bg-gray-700 text-3xl text-white">
        Follower :{data.followers}
        <img src={data.avatar_url} alt="image" width={300} />
      </div>
    </>
  );
}

export const githubLoder = async () => {
  const res = await fetch("https://api.github.com/users/maneesh84");
  return res.json();
};
