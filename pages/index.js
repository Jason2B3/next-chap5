import React, { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const mockEndpoint= 'https://react-meals-7c9cb-default-rtdb.firebaseio.com/mealData.json'
  const response = await fetch(mockEndpoint);
  const data = await response.json();
  return {props: {data: data}}
}

export default function HomePage(props) {
  console.log(props);
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      {/* <li>{props.data[0].name}</li> */}
      <li>Product 3</li>
    </ul>
  );
}


