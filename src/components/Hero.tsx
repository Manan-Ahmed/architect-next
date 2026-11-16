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
          src="/farm-house/farmhouse1.webp"
          alt="Modern luxury farmhouse designed by DESCORP architects in Karachi"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />

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
          <span className="eyebrow text-accent">
            <span className="h-px w-8 bg-accent" />
            DESCORP · DHA Phase 7, Karachi
          </span>

          <h1 className="mt-6 font-display text-display-2 text-secondary-100">
            Architecture & Interior Design Studio in
            <span className="text-accent">  Karachi, Pakistan.</span>
          </h1>

          <p className="mt-4 font-display text-xl text-secondary-100/90 md:text-2xl">
            The Art of Building Tomorrow.
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary/80 md:text-lg">
            DESCORP is a Karachi-based architecture, interior design and
            construction studio delivering residential, commercial and
            hospitality projects, from homes and farmhouses to hotels and
            offices. We manage every stage, from concept and planning to
            execution and final handover.
          </p>

          <div className="mt-10 mb-4 flex flex-wrap gap-4">
            <Button variant="primary" to="/projects">
              View Projects
            </Button>

            <Button variant="secondary" to="/contact">
              Start a Project
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
            <div className="absolute inset-x-0 top-0 h-4 animate-[fadeUp_2s_ease-in-out_infinite] bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
