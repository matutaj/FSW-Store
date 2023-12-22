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
        <div key={item.id} className=" w-[156px] max-w-[170px]">
          <ProductItem product={ComputeProductTotalPrice(item)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
