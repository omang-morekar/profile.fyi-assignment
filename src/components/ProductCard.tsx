import { IProduct } from "@/types/product";
import Image from "next/image";

export default function ProductCard({ title, description, image_url }: IProduct) {
  return (
    <div className="basis-[15%] border-2 my-1 flex-1 grow border-primary rounded p-2 bg-white">
      <div className="flex justify-center">
      <Image src={image_url} width={50} height={50} className="h-3/6" alt={title} />
      </div>
      <h1 className="w-full truncate text-wrap" title={title}>{title}</h1>

    </div>
  );
}
