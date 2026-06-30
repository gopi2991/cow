"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-green-600 text-white p-4">
      <Link href="/">Dashboard</Link>
      <Link href="/cows">Cows</Link>
      <Link href="/milk">Milk</Link>
    </nav>
  );
}
