import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
  title: "Axiom : AI-Powered Business Automation Platform",
  description:
    "An AI-driven system that automates business workflows including email sentiment analysis, video summarization, document-to-Excel conversion, and an intelligent customer support chatbot, significantly reducing manual effort and improving efficiency.",
  image: "/projects/project2.png",
  tags: [
    "React",
    "Tailwind CSS",
    "Flask",
    "Python",
    "Google Gemini",
    "Whisper",
    "Firebase",
    "Machine Learning",
    "NLP"
  ],
  link: "https://drive.google.com/file/d/1xdt2lxc7zBpmzTT6IJNNuidsLG9IyWjU/view",
  github: "https://github.com/manvitha984/Axiom",
},

  {
  title: "FinBoard : Real-Time Finance Dashboard",
  description:
    "A customizable real-time finance dashboard with drag-and-drop widgets, live data visualization, smart caching, and rate-limited API integrations. Built for flexibility, performance, and scalability.",
  image: "/projects/project1.png",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "DnD Kit",
    "Recharts"
  ],
  link: "https://finboard-sepia.vercel.app/dashboard",
  github: "https://github.com/manvitha984/FinBoard",
},
  {
  title: "SvasthMaitri : Donation Platform",
  description:
    "A web-based platform that streamlines medicine donations through a simple submission form, storing requests in a real-time database to help organizations coordinate aid efficiently.",
  image: "/projects/project3.png",
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "Firebase",
    "HTML",
    "CSS"
  ],
  link: "https://github.com/manvitha984/SvasthMaitri",
  github: "https://github.com/manvitha984/SvasthMaitri",
},

  // {
  //   title: "Project Management Tool",
  //   description:
  //     "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
  //   link: "#",
  //   github: "#",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group bg-surface rounded-2xl overflow-hidden animate-fade-in border border-border/50 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              {/* 16:9 image frame — image fills with object-cover and centers focal point */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.parentElement.querySelector(".project-fallback");
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* fallback if image fails */}
                <div
                  className="project-fallback hidden absolute inset-0 items-center justify-center text-foreground/90 bg-card/30"
                  style={{ display: "none" }}
                >
                  <div className="text-sm font-semibold">{project.title}</div>
                </div>

                {/* subtle overlay for legibility on hover (keeps image visible) */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ background: "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.12))" }} />

                {/* overlay controls */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground/95 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                </div>

                <p className="text-muted-foreground text-sm mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/40 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
  <a
    href="https://github.com/manvitha984"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AnimatedBorderButton>
      View All Projects
      <ArrowUpRight className="w-5 h-5" />
    </AnimatedBorderButton>
  </a>
</div>

      </div>
    </section>
  );
};