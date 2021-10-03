export async function getStaticProps(context) {
  const request = await fetch(
    "https://todo-list-1-befa6-default-rtdb.firebaseio.com/data.json"
  );
  const data = await request.json();
  return { props: { counterValue: data.counter }, revalidate: 1 }; // supply findings as rhe comp ƒ()'s props
}

export default function HomePage(props) {
  console.log(props);

  return (
    <>
      {/* <button onClick={firebasePOST}>POST</button> */}
      <h1>Firebase Demonstration</h1>
      <p>A Firebase realtime database has a value saved named counterValue</p>
      <h3>Current Value: {props.counterValue}</h3>
      <p>
        Change the value manually by opening the database yourself then check to
        see how it updates in this webpage
      </p>
      <a href="https://console.firebase.google.com/u/2/project/todo-list-1-befa6/database/todo-list-1-befa6-default-rtdb/data">
        Visit database
      </a>
    </>
  );
}
