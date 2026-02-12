import Link from 'next/link';
import { cn, formatCategorySlug } from '@/lib/utils';
import { CATEGORY_ICONS, CATEGORY_COLORS, type Category } from '@/types/book';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
}

export default function CategoryBadge({
  category,
  size = 'md',
  clickable = false,
}: CategoryBadgeProps) {
  const icon = CATEGORY_ICONS[category];
  const colorClass = CATEGORY_COLORS[category];

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-1.5',
  };

  const badgeContent = (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium text-white transition-all',
        colorClass,
        sizeClasses[size],
        clickable && 'hover:opacity-90 hover:shadow-md cursor-pointer'
      )}
    >
      <span className={cn(size === 'sm' ? 'text-xs' : 'text-sm')}>
        {icon}
      </span>
      {category}
    </span>
  );

  if (clickable) {
    return (
      <Link href={`/categories/${formatCategorySlug(category)}`}>
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
}
