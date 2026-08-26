'use client';

import { useState } from 'react';
import BlogHero from '@/components/BlogHero';
import FeaturedPost from '@/components/FeaturedPost';
import CategoryFilter from '@/components/CategoryFilter';
import BlogCard from '@/components/BlogCard';
import {
  blogs,
  categories,
  getBlogsByCategory,
  type BlogCategory,
} from '@/data/blog';

export default function Blog() {
  const [activeCategory, setActiveCategory] =
    useState<BlogCategory | 'All'>('All');

  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = getBlogsByCategory(activeCategory);

  const featuredPost = blogs[0];

  const displayedPosts = filteredPosts
    .filter((post) => post.id !== featuredPost.id)
    .slice(0, visiblePosts);

  const hasMorePosts =
    displayedPosts.length < filteredPosts.length - 1;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <>
      {/* <BlogHero /> */}

      <section className="relative overflow-hidden bg-primary py-24">

        {/* Background Grid */}
        <div className="absolute inset-0 grid-lines opacity-20" />

        <div className="container-content relative z-10">

          {/* Featured Article */}
          {/* <div className="mb-24">
            <FeaturedPost post={featuredPost} />
          </div> */}

          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="eyebrow">
              Latest Insights
            </span>

            <h2 className="mt-5 text-5xl lg:text-6xl font-black uppercase leading-tight text-white">
              Architecture Journal
            </h2>

            <p className="mt-6 text-lg leading-8 text-secondary">
              Explore luxury architecture, commercial interiors,
              modern homes, office design, sustainable buildings,
              and expert construction insights.
            </p>

          </div>

          {/* Categories */}

          <div className="mb-16 flex justify-center">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>

          {/* Blog Grid */}

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {displayedPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

          {/* Empty */}

          {displayedPosts.length === 0 && (
            <div className="mt-16 border border-secondary/10 bg-primary-200 py-24 text-center">

              <h3 className="text-3xl font-bold uppercase text-white">
                No Articles Found
              </h3>

              <p className="mt-4 text-secondary">
                There are currently no articles in this category.
              </p>

            </div>
          )}

          {/* Load More */}

          {hasMorePosts && (
            <div className="mt-20 text-center">

              <button
                onClick={handleLoadMore}
                className="btn-primary"
              >
                Load More Articles
              </button>

            </div>
          )}

        </div>
      </section>
    </>
  );
}