// 'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

import RelatedPosts from '@/components/RelatedPost';
import { use } from 'react';
import {
  getBlogBySlug,
  getRelatedPosts,
  getAdjacentPosts,
} from '@/data/blog';


  export default function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = slug ? getBlogBySlug(slug) : null;

  if (!post) {
    return (
      <div className="pt-32 section-padding text-center">
        <div className="container-content">
          <h1 className="mb-6 text-5xl font-black uppercase text-white">
            Article Not Found
          </h1>

          <p className="text-secondary text-lg">
            The article you're looking for doesn't exist or has been removed.
          </p>

          <Link
            href="/blog"
            className="btn-primary mt-8 inline-flex"
          >
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <>
      <article>
        {/* =========================
            HERO
        ========================== */}
        <header className="relative flex h-[70vh] min-h-[550px] items-end overflow-hidden md:h-[75vh] md:min-h-[650px] lg:h-[85vh] lg:min-h-[700px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${post.coverImage}')`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

          {/* Hero Content */}
          <div className="container-content relative z-10 pb-12 md:pb-16">
            {/* Back Link */}
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>

            <div className="max-w-4xl">
              {/* Meta Information */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="badge badge-accent">
                  {post.category}
                </span>

                <span className="text-caption text-secondary">
                  {post.date}
                </span>

                <span className="flex items-center gap-1 text-caption text-white/80">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white lg:text-5xl">
                {post.title}
              </h2>

             
              {/* AUTHOR SECTION */}
<div className="mt-24 border-t border-secondary/10 pt-12">
  <div className="flex flex-col items-start gap-6 sm:flex-row">
    {post.author.avatar ? (
      <Image
        src={post.author.avatar}
        alt={post.author.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full border-2 border-accent object-cover"
      />
    ) : (
      <div className="h-20 w-20 rounded-full border-2 border-accent bg-secondary/20" />
    )}

    <div>
      <p className="text-3xl font-black uppercase text-white">
        {post.author.name}
      </p>

      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
        {post.author.role}
      </p>

      <p className="mt-5 max-w-2xl leading-8 text-secondary">
        {post.author.bio}
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
        </header>

        {/* =========================
            ARTICLE CONTENT
        ========================== */}
        <div className="relative bg-primary py-24">
          <div className="container-content relative z-10">
            <div className="mx-auto max-w-4xl">
              {/* Excerpt */}
              <div className="mb-16 border-l-4 border-accent pl-8">
                <p className="text-2xl font-medium italic leading-relaxed text-secondary">
                  {post.excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="article-content">
                {post.content.split('\n\n').map((block, index) => {
                  const trimmedBlock = block.trim();

                  /* H2 */
                  if (trimmedBlock.startsWith('## ')) {
                    return (
                      <h2 key={index}>
                        {trimmedBlock.replace(/^## /, '')}
                      </h2>
                    );
                  }

                  /* H3 */
                  if (trimmedBlock.startsWith('### ')) {
                    return (
                      <h3 key={index}>
                        {trimmedBlock.replace(/^### /, '')}
                      </h3>
                    );
                  }

                  /* Unordered List - * */
                  if (
                    trimmedBlock.startsWith('* ') &&
                    trimmedBlock.includes('\n* ')
                  ) {
                    return (
                      <ul key={index}>
                        {trimmedBlock
                          .split('\n')
                          .filter((line) => line.trim().startsWith('* '))
                          .map((line, i) => (
                            <li key={i}>
                              {line.replace(/^\* /, '')}
                            </li>
                          ))}
                      </ul>
                    );
                  }

                  /* Unordered List - - */
                  if (
                    trimmedBlock.startsWith('- ') &&
                    trimmedBlock.includes('\n- ')
                  ) {
                    return (
                      <ul key={index}>
                        {trimmedBlock
                          .split('\n')
                          .filter((line) => line.trim().startsWith('- '))
                          .map((line, i) => (
                            <li key={i}>
                              {line.replace(/^- /, '')}
                            </li>
                          ))}
                      </ul>
                    );
                  }

                  /* Ordered List */
                  if (
                    /^\d+\.\s/.test(trimmedBlock) &&
                    trimmedBlock.includes('\n')
                  ) {
                    return (
                      <ol key={index}>
                        {trimmedBlock
                          .split('\n')
                          .filter((line) => /^\d+\.\s/.test(line.trim()))
                          .map((line, i) => (
                            <li key={i}>
                              {line.replace(/^\d+\.\s/, '')}
                            </li>
                          ))}
                      </ol>
                    );
                  }

                  /* Blockquote */
                  if (trimmedBlock.startsWith('> ')) {
                    return (
                      <blockquote key={index}>
                        {trimmedBlock.replace(/^>\s/, '')}
                      </blockquote>
                    );
                  }

                  /* Normal Paragraph */
                  return <p key={index}>{trimmedBlock}</p>;
                })}
              </div>

             


              {/* New author section  */}
              <div className="mt-24 border-t border-secondary/10 pt-12">
  <div className="flex flex-col items-start gap-6 sm:flex-row">

    {post.author.avatar ? (
      <Image
        src={post.author.avatar}
        alt={post.author.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full border-2 border-accent object-cover"
      />
    ) : (
      <div className="h-20 w-20 rounded-full border-2 border-accent bg-secondary/20 flex items-center justify-center">
        <span className="text-white text-xl font-bold">
          {post.author.name?.charAt(0)?.toUpperCase() || "A"}
        </span>
      </div>
    )}

    <div>
      <p className="text-3xl font-black uppercase text-white">
        {post.author.name}
      </p>

      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
        {post.author.role}
      </p>

      <p className="mt-5 max-w-2xl leading-8 text-secondary">
        {post.author.bio}
      </p>
    </div>

  </div>
</div>
            </div>
          </div>
        </div>

        {/* =========================
            PREVIOUS / NEXT ARTICLES
        ========================== */}
        {(prev || next) && (
          <div className="border-y border-secondary/10 bg-primary-200 py-24">
            <div className="container-content">
              {/* Section Heading */}
              <div className="mb-12">
                <h2 className="text-4xl font-black uppercase text-white lg:text-5xl">
                  Continue Reading
                </h2>

                <p className="mt-3 text-lg text-secondary">
                  Explore the previous or next article.
                </p>
              </div>

              {/* Navigation Cards */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Previous */}
                {prev && (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group border border-secondary/10 bg-primary p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-accent"
                  >
                    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
                      <ArrowLeft className="h-4 w-4" />
                      Previous Article
                    </div>

                    <h3 className="mt-6 text-2xl font-bold uppercase leading-snug text-white transition-colors group-hover:text-accent">
                      {prev.title}
                    </h3>

                    <div className="mt-8 flex items-center gap-2 font-semibold uppercase tracking-wider text-accent">
                      Read Article

                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                  </Link>
                )}

                {/* Next */}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group border border-secondary/10 bg-primary p-8 text-right transition-all duration-500 hover:-translate-y-2 hover:border-accent"
                  >
                    <div className="flex items-center justify-end gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
                      Next Article

                      <ArrowRight className="h-4 w-4" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold uppercase leading-snug text-white transition-colors group-hover:text-accent">
                      {next.title}
                    </h3>

                    <div className="mt-8 flex items-center justify-end gap-2 font-semibold uppercase tracking-wider text-accent">
                      Read Article

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* =========================
          RELATED POSTS
      ========================== */}
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}