import { Video, Box, HardHat } from "lucide-react";
// import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
// import type { Metadata } from 'next';

import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
// import { Button } from '@/components/Button';


export function Testimonials() {
    return(
        <>
         <section className="bg-primary py-section">
   <div className="container-content">
     <Reveal>
       <Eyebrow>Client Feedback</Eyebrow>
     </Reveal>

     <Reveal delay={100}>
       <h2 className="mt-5 font-display text-heading text-secondary">
         What clients across the Pakistan say.
       </h2>
     </Reveal>

     <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 md:grid-cols-3">

       {/* Testimonial 1 */}
       <Reveal>
         <div className="flex h-full flex-col bg-primary p-7">
           <div className="flex gap-1 text-accent">
             {Array.from({ length: 5 }).map((_, idx) => (
               <Star key={idx} className="h-4 w-4 fill-current" />
             ))}
           </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary/70">
            &ldquo;Used these renderings for pre-sales marketing and buyers couldn&apos;t believe the home wasn&apos;t built yet. The entire process was handled remotely, which made things so much easier.&rdquo;
          </p>

          <div className="mt-6 border-t border-secondary/10 pt-4">
            <div className="text-sm font-bold text-secondary">
             Wahab
            </div>
            <div className="text-xs text-secondary/50">
              Photorealistic 3D Exterior Rendering
            </div>
          </div>
        </div>
      </Reveal>

      {/* Testimonial 2 */}
      <Reveal delay={80}>
        <div className="flex h-full flex-col bg-primary p-7">
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary/70">
            &ldquo;The walkthrough video sold the project to our investors before construction even started — and we never had a single in-person meeting with the team.&rdquo;
          </p>

          <div className="mt-6 border-t border-secondary/10 pt-4">
            <div className="text-sm font-bold text-secondary">
             Rachel S.
            </div>
            <div className="text-xs text-secondary/50">
             Architectural CGI and Walkthroughs
            </div>
          </div>
        </div>
      </Reveal>

      {/* Testimonial 3 */}
      <Reveal delay={160}>
        <div className="flex h-full flex-col bg-primary p-7">
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary/70">
            &ldquo;Helped my clients finalize material choices without a single physical sample board — all coordinated remotely over video calls.&rdquo;
          </p>

          <div className="mt-6 border-t border-secondary/10 pt-4">
            <div className="text-sm font-bold text-secondary">
              Tom B.
            </div>
            <div className="text-xs text-secondary/50">
              Interior 3D Visualization Services
            </div>
          </div>
        </div>
      </Reveal>

    </div>
  </div>
</section>
        
        
        </>
    )
}

