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
  // this is an absolute url, but I keep getting an error saying TypeError: Only absolute URL's are supported
  const response = await fetch("/data.json"); 
  // const response = await fetch("http://localhost:3000/data.json"); 
  const parsedInfo = response.json();
  return { props: { jsonData: parsedInfo } };
}
// INTENTION ▼ ▼
// Use fetchAPI to grab data from our local data.json file
// I'm aware I can simply import its content to the client side
// I'm sticking to this approach for the sake of learning how getStaticProps works

// ISSUES
// The fetch URL must be absolute, and mine doesn't seem to be working
// response.json() always crashes my site for some reason and I don't know why
