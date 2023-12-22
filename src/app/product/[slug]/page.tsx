import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productI-mages";
import ProductoInfo from "./components/product-inf";
import { ComputeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          Produt: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;
  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductoInfo product={ComputeProductTotalPrice(product)} />
      <ProductList products={product.category.Produt} />
    </div>
  );
};

export default ProductDetailsPage;
