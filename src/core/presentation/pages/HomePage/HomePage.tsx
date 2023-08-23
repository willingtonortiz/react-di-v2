import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to={"/products"}>Products</Link>
      <br />
      <Link to={"/about"}>About</Link>
    </div>
  );
}
