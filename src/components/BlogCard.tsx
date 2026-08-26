import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}

export default function BlogCard({
  post,
  variant = 'default',
}: BlogCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex gap-5 items-start"
      >
        <div className="relative w-28 h-28 overflow-hidden border border-secondary/10 flex-shrink-0">

          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

        </div>

        <div>

          <span className="text-accent uppercase tracking-[0.25em] text-xs">
            {post.category}
          </span>

          <h4 className="mt-2 text-white text-lg font-bold leading-snug group-hover:text-accent transition-colors">
            {post.title}
          </h4>

          <div className="mt-3 flex items-center gap-4 text-secondary text-sm">

            <span>{post.date}</span>

            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>

          </div>

        </div>
      </Link>
    );
  }

  return (
    <article className="group overflow-hidden border border-secondary/10 bg-primary transition-all duration-500 hover:border-accent hover:-translate-y-2">

      <Link href={`/blog/${post.slug}`}>

        <div className="relative aspect-[4/3] overflow-hidden">

          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute top-5 left-5">

            <span className="bg-accent text-white uppercase tracking-widest text-xs px-4 py-2">
              {post.category}
            </span>

          </div>

        </div>

        <div className="p-8">

          <div className="flex items-center gap-5 text-secondary text-sm uppercase tracking-wider">

            <span>{post.date}</span>

            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>

          </div>

          <h3 className="mt-5 text-2xl font-black uppercase leading-snug text-white group-hover:text-accent transition-colors">

            {post.title}

          </h3>

          <p className="mt-5 text-secondary leading-8 line-clamp-3">

            {post.excerpt}

          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-accent uppercase tracking-widest text-sm">

            Read Article

            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />

          </div>

        </div>

      </Link>

    </article>
  );
}