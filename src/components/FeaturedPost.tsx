// import Link from 'next/link';
// import { ArrowRight, Clock } from 'lucide-react';
// import type { BlogPost } from '../data/blog';

// interface FeaturedPostProps {
//   post: BlogPost;
// }

// export default function FeaturedPost({ post }: FeaturedPostProps) {
//   return (
//     <article className="card-elevated group">
//       <Link href={`/blog/${post.slug}`} className="block md:flex">
//         <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
//           <img
//             src={post.coverImage}
//             alt={post.title}
//             className="image-cover image-hover-zoom h-full"
//           />
//           <div className="gradient-overlay group-hover:bg-black/70 transition-colors duration-500" />
//           <div className="absolute top-6 left-6">
//             <span className="badge badge-accent">Featured</span>
//           </div>
//         </div>
//         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <div className="flex items-center gap-4 text-caption text-neutral-500 mb-4">
//             <span className="badge badge-primary text-xs">{post.category}</span>
//             <span>{post.date}</span>
//             <span className="flex items-center gap-1">
//               <Clock className="w-3 h-3" />
//               {post.readTime}
//             </span>
//           </div>
//           <h2 className="text-2xl md:text-3xl font-serif font-medium text-neutral-900 mb-4 group-hover:text-accent-700 transition-colors">
//             {post.title}
//           </h2>
//           <p className="text-body-lg text-neutral-600 mb-6 line-clamp-3">
//             {post.excerpt}
//           </p>
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:text-accent-700 transition-colors">
//               <span>Read Article</span>
//               <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//             </div>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }



import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../data/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="card-elevated group">
      <Link href={`/blog/${post.slug}`} className="block md:flex">
        <div className="relative overflow-hidden aspect-[16/10] md:w-1/2 md:aspect-auto">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="image-cover image-hover-zoom"
          />

          <div className="gradient-overlay transition-colors duration-500 group-hover:bg-black/70" />

          <div className="absolute top-6 left-6">
            <span className="badge badge-accent">Featured</span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
          <div className="mb-4 flex items-center gap-4 text-caption text-neutral-500">
            <span className="badge badge-primary text-xs">
              {post.category}
            </span>

            <span>{post.date}</span>

            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-serif font-medium text-neutral-900 transition-colors group-hover:text-accent-700 md:text-3xl">
            {post.title}
          </h2>

          <p className="mb-6 line-clamp-3 text-body-lg text-neutral-600">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-700">
              <span>Read Article</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
