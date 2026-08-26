
export default function BlogHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        // className="absolute inset-0 bg-cover bg-center"
        // style={{
        //   backgroundImage:
        // }}
      />
      <div className="absolute inset-0 bg-neutral-900/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/30 to-neutral-900/70" />

      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
        <span className="text-overline text-accent-400 mb-4 block animate-fade-in">
          DESCORP Journal
        </span>
        <h1 className="heading-headline text-white mb-6 animate-slide-up animate-delay-100">
          Insights & Journal
        </h1>
        <p className="text-subtitle text-neutral-300 max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Architecture, Interior Design, Innovation, Luxury Living & Design
          Thinking.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}
