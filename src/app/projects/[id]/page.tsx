'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Maximize,ListChecks, } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { projects } from '@/data/content';
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);


  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary text-secondary">
        <div className="text-center">
          <p className="text-secondary/60">Project not found.</p>
          <button onClick={() => router.push('/projects')} className="btn-primary mt-6">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
const nextProject = projects[(projectIndex + 1) % projects.length];

const [lightboxIndex, setLightboxIndex] = useState(0);
const [open, setOpen] = useState(false);


  const specs = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Year', value: project.year },
    { icon: Building2, label: 'Client', value: project.client },
            { icon: ListChecks, label: 'Scope', value: project.scope.join(", ")},
    { icon: Maximize, label: 'Area', value: project.area },
 

  ];

  return (
    <>
      {/* Hero image */}
      <section 
       className=" relative h-[50vh] min-h-[350px] overflow-hidden bg-primary md:h-[55vh]"
       >
      
        <div className="relative h-full w-full">
  <Image
    src={project.image}
    alt={project.name}
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/20" />
        <div className="container-content absolute inset-x-0 bottom-0 pb-10 md:pb-14">
          <Reveal>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-secondary/60 transition-colors hover:text-accent">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All Projects
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className='mt-3'>
              <span className="text-eyebrow uppercase text-accent">{project.category}</span>
              <h1 className=" font-display text-display-2 text-secondary-100">
                {project.name}
              </h1>
           
              <div>
 <p className="font-display text-2xl text-[18px] text-secondary ">
 {project.subtitle} 
 
  </p>
    </div>
            </div>

            </Reveal>

        </div>
      </section>

      {/* Overview */}
    <section className="bg-primary  pt-16 pb-24">
    
  <div className="container-content">

   

    <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-7 ">
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 text-lg leading-relaxed text-secondary/80">
            {project.description}
          </p>
        </Reveal>
</div>
        ...

            {/* Specs */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={100}>
                <div className="space-y-px bg-secondary/10">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-4 bg-primary p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
                        <spec.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-eyebrow uppercase text-secondary/50">{spec.label}</div>
                        <div className="mt-1 text-sm text-secondary">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-primary p-5">
                    <div className="text-eyebrow uppercase text-secondary/50">Status</div>
                    <div className="mt-1 text-sm text-accent">{project.status}</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
    
  


<section className="bg-primary-100 py-section">
  <div className="container-content">
    <Reveal>
      <Eyebrow>Gallery</Eyebrow>
    </Reveal>

    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      {project.gallery.map((img, index) => (
        <div
          key={index}
       onClick={() => {
  setLightboxIndex(index);
  setOpen(true);
}}
          
          className="group relative cursor-pointer overflow-hidden rounded-xl"
        >
      
      <div
  className={`relative w-full overflow-hidden ${
    img.orientation === "portrait"
      ? "aspect-[4/5]"
      : "aspect-[16/9]"
  }`}
>
  <Image
    src={img.src}
    alt={`${project.name} ${index + 1}`}
    fill
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition duration-700 group-hover:scale-110"
  />
</div>    
   
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max px-2 py-1">
  <span className="whitespace-nowrap text-[8px] tracking-wide text-white drop-shadow-md sm:text-[10px]">
    © 2026 DESCORP. All Rights Reserved.
  </span>
</div>

      
        </div>
      ))}
    </div>
  </div>
</section>

    

      {/* Next project */}
      <section className="bg-primary-200 py-section">
        <div className="container-content">
          <Link href={`/projects/${nextProject.id}`} className="group block">
            <Reveal>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-eyebrow uppercase text-secondary/50">Next Project</span>
                  <h2 className="mt-3 font-display text-heading text-secondary-100 transition-colors duration-300 group-hover:text-accent">
                    {nextProject.name}
                  </h2>
                  <p className="mt-2 text-sm text-secondary/60">
                    {nextProject.location} · {nextProject.year}
                  </p>
                </div>
                <span className="flex h-14 w-14 items-center justify-center border border-secondary/20 text-secondary transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          </Link>
        </div>
      </section>




<Lightbox
  open={open}
  close={() => setOpen(false)}
  index={lightboxIndex}
  slides={project.gallery.map((img) => ({ src: img.src }))}
  render={{
    slide: ({ slide }) => (
      <div className="flex h-full w-full items-center justify-center px-2 sm:px-4">
        <div className="relative flex h-fit w-fit max-w-full items-center justify-center">
          <img
            src={slide.src}
            alt=""
            className="block max-h-[80vh] max-w-[92vw] object-contain sm:max-h-[85vh] sm:max-w-[95vw] md:max-h-[90vh]"
          />
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 sm:bottom-4 sm:px-4 sm:py-2 w-max">
            <span className="whitespace-nowrap text-[8px] tracking-wide text-white drop-shadow-md sm:text-[10px]">
              © 2026 DESCORP. All Rights Reserved.
            </span>
          </div>
          
        </div>
      </div>
    ),
  }}
/>
      
    </>
  );
}
