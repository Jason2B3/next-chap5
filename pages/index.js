import React, { useEffect, useState } from "react";
export default function HomePage(props) {
  console.log(props);
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      {/* <li>{props.jsonData.name}</li> */}
      <li>Product 3</li>
    </ul>
  );
}
export async function getStaticProps(context) {
  const baseURL = "http://localhost:3000";
  const response = await fetch(new URL("data.json", baseURL), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const response = await fetch("http://localhost:3000/data.json");  // doesn't work either
  const parsedInfo = await response.json(); // error here
  return { props: { jsonData: parsedInfo } };
}
// INTENTION ▼ ▼
// Use fetchAPI to grab data from our local data.json file
// I'm aware I can simply import its content to the client side
// I'm sticking to this approach for the sake of learning how getStaticProps works

// ISSUES
// The fetch URL must be absolute, and mine doesn't seem to be working
// response.json() always crashes my site for some reason and I don't know why
