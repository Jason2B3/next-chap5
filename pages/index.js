import fs from "fs/promises"; // a standard node feature (fails on front-end)
import path from "path";

export async function getStaticProps(context) {
  const projectRoot = process.cwd(); // "current" working directory
  // equals the project's root directory, not the pages folder where we are

  const filepath = path.join(projectRoot, "/public/data.json");
  // builds an abosolute path to our data.json file

  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  // read the file with the absolute path specified as an arg, then parse

  return { props: { info: data } };
}

export default function HomePage(props) {
  console.log(props);
  return (
    <ul>
      {props.info.map((entry) => {
        return <li key={entry.id}>{entry.name}</li>;
      })}
    </ul>
  );
}
