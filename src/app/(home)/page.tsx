import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner-desconto.png"
        height={0}
        width={0}
        className=" h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mẽs"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-mouses.png"
        height={0}
        width={0}
        className=" h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto em mouses"
      />
    </div>
  );
}
