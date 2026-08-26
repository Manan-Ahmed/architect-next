export function Marquee() {
  const items = [
    'Architecture',
    'Interior Design',
    'Master Planning',
    '3D Visualization',
    'Project Management',
    'Renovation',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-secondary/10 bg-primary py-5">
      <div className="flex w-max animate-marquee items-center gap-12">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl font-bold tracking-tight text-secondary/80 md:text-3xl">
              {item}
            </span>
            <span className="h-2 w-2 bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
