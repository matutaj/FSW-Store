import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 py-3"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className=" text-xs font-bold"> {category.name}</span>
    </Badge>
  );
};

export default CategoriesItem;
