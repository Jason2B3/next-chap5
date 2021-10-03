export default function HomePage(props) {
  console.log(props)
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{props.data[0].name}</li>
      <li>Product 3</li>
    </ul>
  );
}
export async function getServerSideProps(context) {
  // Place all backend code here, then return props based on what you fetch
  const mockEndpoint= 'https://jsonplaceholder.typicode.com/users'  
  const response = await fetch(mockEndpoint);
  const data = await response.json();
  return {props: {data: data}} // return props 
} // search this URL to view whats inside this dummy hosted JSON file
