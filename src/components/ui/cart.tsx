import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { ComputeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import Link from "next/link";
import { SheetClose } from "./sheet";

const Cart = () => {
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex  h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={ComputeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Carrinho Vazio, Vamos Fazer Compra?
              </p>
            )}
          </div>
        </ScrollArea>
      </div>
      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>SubTotal</p>
            <p>Kz{subTotal.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>Grátis</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- Kz{totalDiscount.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>Kz{total.toFixed(2)}</p>
          </div>
          <SheetClose asChild>
            <Link href="/">
              <Button className="mt-7 font-bold uppercase">
                Finalizar Compra
              </Button>
            </Link>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default Cart;
