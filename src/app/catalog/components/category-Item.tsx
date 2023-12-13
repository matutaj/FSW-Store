import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoeyItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoeyItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg bg-gradient-to-r from-[#5033c3] to-[rgba(80,51,195,0.20)] ">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="ax-h-[70%] h-auto w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className=" rounded-bl.lg rounded-br-lg bg-accent  py-2">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
