import Navbar from "@/components/Navbar";
import CowManager from "@/components/CowManager";

export default function CowsPage() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <CowManager />
      </div>
    </>
  );
}
