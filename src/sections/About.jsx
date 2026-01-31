import { Code2, Layers, Users, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Strong foundation in data structures & algorithms, sharpened through competitive programming.",
  },
  {
    icon: Layers,
    title: "System Design",
    description:
      "Designing clean, scalable logic and reasoning about system behavior and trade-offs.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working cross-functionally to own features end-to-end and ship production-quality software.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description:
      "Always learning new tools, patterns and practices to improve engineering craft and impact.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building scalable systems and solving hard problems through code.
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a final‑year (4th year) Computer Science student actively seeking Software Engineer,
                AI/ML, or data-focused roles. I have a strong foundation in data structures, algorithms,
                and problem-solving, shaped by consistent participation in competitive programming and
                real-world engineering projects.
              </p>

              <p>
                I previously <span className="text-primary font-semibold">interned at Microsoft</span>, where I
                worked on production-level systems, strengthening my ability to write reliable, maintainable
                code, collaborate across teams, and own features end-to-end in a professional engineering
                environment.
              </p>

              <p>
                I enjoy tackling complex technical challenges - whether it’s optimizing algorithms, designing clean
                logic, reasoning about system behavior, or working with data-driven solutions. Competitive
                programming has sharpened my ability to think efficiently, handle edge cases, and solve problems
                under strict constraints.
              </p>

              <p>
                I’m driven by opportunities to build robust, high-impact software and intelligent systems, and to
                continuously grow as an engineer while contributing meaningfully to strong technical teams.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build dependable, maintainable solutions - applying strong problem-solving to software, data, and intelligent systems.”
              </p>
            </div>
          </div>

          {/* Right Column - Skill Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};