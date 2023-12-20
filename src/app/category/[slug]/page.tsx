import ProductItem from "@/components/productItem";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { ComputeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-8 p-5">
        <Badge
          className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant="outline"
        >
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {params.slug}
        </Badge>

        <div className="grid grid-cols-2  gap-8">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={ComputeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
