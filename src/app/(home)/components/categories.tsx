import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./categoriesItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((item) => (
        <CategoriesItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Categories;
