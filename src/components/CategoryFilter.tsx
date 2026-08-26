import type { BlogCategory } from '../data/blog';

interface CategoryFilterProps {
  categories: (BlogCategory | 'All')[];
  activeCategory: BlogCategory | 'All';
  onSelect: (category: BlogCategory | 'All') => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-neutral-900 text-white shadow-soft'
              : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
