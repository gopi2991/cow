import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Welcome to Cow Farm System</p>
    </div>
  );
}
