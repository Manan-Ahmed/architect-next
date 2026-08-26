


import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/modern-banglo/banglo1.webp"
          alt="Modern architecture"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/60" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="grid-lines absolute inset-0 opacity-30" />

      {/* Content */}
      <div className="container-content relative z-10 pt-20">
        <div className="max-w-3xl">
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent" />
              Architecture, Interior Design & Turn-Key Solutions
            </span>
          </div>

          <h1
            className="mt-6 font-display text-display-1 text-secondary-100 animate-fade-up"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            The Art
            <br />
            of Building
            <span className="text-accent"> Tomorrow.</span>
          </h1>


          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-secondary/80 animate-fade-up md:text-lg"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            We design and deliver exceptional architecture, luxury interiors,
            construction, project management, and complete turn-key solutions
            with enduring precision. From concept development and planning to
            execution and final handover, every space reflects innovation,
            craftsmanship, and a bold futuristic vision.
          </p>


          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up mb-4"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <Button variant="primary" to="/projects">
              View Projects
            </Button>

            <Button variant="secondary" to="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-eyebrow uppercase text-secondary/40">
            Scroll
          </span>

          <div className="relative h-12 w-px overflow-hidden bg-secondary/20">
            <div className="absolute inset-x-0 top-0 h-4 bg-accent animate-[fadeUp_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
