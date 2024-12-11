import Man from "@/components/bodyComponents/man/man";
import Categories from "@/components/categories/categories";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Categories />
      <Man />
    </main>
  );
}
