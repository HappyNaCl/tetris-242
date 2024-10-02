import Navbar from "../components/navbar";
import "../index.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-blue-900 text-5xl">Hello World!</h1>
      <p>This is home page</p>
    </div>
  );
}
