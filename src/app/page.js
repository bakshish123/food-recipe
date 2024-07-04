import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>welcome to recipe app</h1>
      <Link href={'/recipe-list'}>explore recipes</Link>

    </div>
  );
}
