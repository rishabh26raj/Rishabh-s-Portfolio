import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<TypeScript> <JavaScript> <Java> <Python> <MySQL> <HTML/CSS> <C>",
          "[Next.js] [React] [Node.js] [Express] [Prisma] [Tailwind] [MongoDB] [Firebase]",
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}