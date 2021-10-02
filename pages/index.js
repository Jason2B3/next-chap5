import React, { useEffect, useState } from "react";
function HomePage(props) {
  const [json, setJson] = useState(null);
  const fetchSomethin = async () => {
    const a = await fetch("data.json");
    return a.json();
  };
  useEffect(() => {
    const asyncInner = async function () {
      let res = await fetchSomethin();
      console.log(res) // see the entire JSON file return 
      setJson(res.name); // need to wait for asyncFN results before setting state
    };
    asyncInner();
  }, []);
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{json}</li>
      <li>Product 3</li>
    </ul>
  );
}

export default HomePage;
