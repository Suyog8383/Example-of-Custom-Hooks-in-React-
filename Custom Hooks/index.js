import "./styles.css";
import { FetchApi } from "./fetchApi";

export default function App() {
  const [data] = FetchApi("https://fakestoreapi.com/products");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data &&
          data.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
}
