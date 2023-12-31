import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./ui/discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className=" flex w-[156px] flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[90%]"
            alt={product.name}
            style={{
              objectFit: "contain",
            }}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-4">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className=" flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className=" font-semibold">
                  Kz {product.totalPrice.toFixed(2)}
                </p>
                <p className="line-through opacity-75">
                  Kz{Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="line-through opacity-75">
                Kz{Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
