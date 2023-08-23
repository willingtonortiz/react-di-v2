import { setupDependencies } from "../../../infrastructure/di/dependencies.ts";
import { Link } from "react-router-dom";

await setupDependencies();

export function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>

      <Link to={"/"}>Return Home</Link>
    </div>
  );
}
