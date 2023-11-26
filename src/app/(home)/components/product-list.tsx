import ProductItem from "@/components/productItem";
import { ComputeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
      {products.map((item) => (
        <ProductItem key={item.id} product={ComputeProductTotalPrice(item)} />
      ))}
    </div>
  );
};

export default ProductList;
