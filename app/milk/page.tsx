import MilkManager from "@/app/components/MilkManager";
import Navbar from "@/app/components/Navbar";

export default function CowsPage() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <MilkManager />
      </div>
    </>
  );
}
