import BlogCard from './BlogCard';
import type { BlogPost } from '../data/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-28 bg-primary border-t border-secondary/10">

      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="container-content relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span className="eyebrow">
            Continue Reading
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black uppercase leading-tight text-white">
            Related Articles
          </h2>

          <p className="mt-6 text-lg leading-8 text-secondary">
            Discover more insights on architecture, luxury interiors,
            commercial design, construction and modern living from
            DESCORP.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

      </div>

    </section>
  );
}