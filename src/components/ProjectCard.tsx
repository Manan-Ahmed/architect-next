import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "../data/content";

export function ProjectCard({
  project,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block overflow-hidden bg-primary"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-precise group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
      </div>

      <div className="absolute left-5 top-5 z-10">
        <span className="inline-flex items-center bg-primary/90 px-3 py-1.5 text-eyebrow uppercase text-secondary backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
        <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-secondary-100 md:text-2xl">
                {project.name}
              </h3>
 
              <p className="mt-1 text-xs uppercase tracking-wider text-secondary/70">
                {project.location} · {project.area}
                </p>
             
        
            </div>

            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-secondary/30 text-secondary-100 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-0" />
            </span>
          </div>

          <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-secondary/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {project.description}
          </p>
          
        </div>
      </div>
    </Link>
  );
}