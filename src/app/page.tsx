import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/navbar";
import { IProduct } from "@/types/product";
import { createClient } from "@/utils/supabase/client";
export default async function Home() {
  const supabase = createClient();

  const { data: products } = await supabase
    .from<"products", IProduct>("products")
    .select<"products", IProduct>();

  return (
    <>
      <Navbar />

      <div className="mt-16">
        <div className="flex gap-4 w-full flex-wrap justify-evenly">

        {products?.map((product) => (
          <ProductCard  {...product} />
        ))}
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        </div>
      </div>
    </>
  );
}
