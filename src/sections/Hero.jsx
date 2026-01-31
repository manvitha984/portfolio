import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Download,
  Code,
  Palette,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from "react";

const techCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    items: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    ],
  },
  {
  id: "frontend",
  label: "Frontend",
  icon: Palette,
  items: [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  ],
},

  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "#000000" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    ],
  },
  {
  id: "cloud",
  label: "Cloud & Tools",
  icon: Cloud,
  items: [
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", color: "#F2C811" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#000000" },
  ],
}
];

export const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const activeTechs = techCategories.find((c) => c.id === activeCategory)?.items || [];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Competitive Programmer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
  Turning <span className="text-primary glow-text">code</span>
  <br />
  into impactful
  <br />
  <span className="font-serif italic font-normal text-white">
    experiences.
  </span>
</h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Manvitha - a Software Engineer with a strong foundation in algorithms, systems, and problem-solving. I build reliable, scalable software and data-driven solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
 {/* Social Links */}
<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
  <span className="text-sm text-muted-foreground">Follow me: </span>

  <div className="flex items-center gap-2">
    <a
      href="https://github.com/manvitha984"
      aria-label="GitHub"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <Github className="w-5 h-5" />
    </a>

    <a
      href="https://www.linkedin.com/in/manvitha-maddula/"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <Linkedin className="w-5 h-5" />
    </a>

    <a
      href="https://leetcode.com/manvitha984"
      aria-label="LeetCode"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/leetcode.svg"
        alt="LeetCode"
        className="w-5 h-5"
        style={{ filter: "invert(1) brightness(2)" }}
      />
    </a>

    <a
      href="https://www.codechef.com/users/manvitha6731"
      aria-label="CodeChef"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codechef.svg"
        alt="CodeChef"
        className="w-5 h-5"
        style={{ filter: "invert(1) brightness(2)" }}
      />
    </a>

    <a
      href="https://codeforces.com/profile/manvitha6731"
      aria-label="Codeforces"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeforces.svg"
        alt="Codeforces"
        className="w-5 h-5"
        style={{ filter: "invert(1) brightness(2)" }}
      />
    </a>
  </div>
</div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Manvitha"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tech Stack Section with Official Logos */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Technologies I Work With
            </h2>
            <p className="text-base text-muted-foreground">
              Click a category to explore my tech stack
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {techCategories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    glass px-6 py-3.5 rounded-xl
                    flex items-center gap-3
                    transition-all duration-300
                    group relative overflow-hidden
                    ${isActive
                      ? "bg-primary/15 ring-2 ring-primary/60 shadow-lg shadow-primary/20"
                      : "hover:bg-surface/60 hover:scale-105"
                    }
                  `}
                >
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isActive ? "opacity-100" : ""}
                  `}
                  style={{
                    background: `radial-gradient(circle at center, ${isActive ? 'rgba(32, 178, 166, 0.1)' : 'rgba(32, 178, 166, 0.05)'}, transparent)`
                  }}
                  />
                  
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                  <span
                    className={`font-semibold text-sm relative z-10 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {category.label}
                  </span>
                  <span className={`
                    text-xs px-2 py-0.5 rounded-full relative z-10 transition-all duration-300
                    ${isActive 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }
                  `}>
                    {category.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech Cards Grid with Official Logos */}
          <div className="max-w-6xl mx-auto">
            <div className="glass-strong rounded-3xl p-8 md:p-10 border border-primary/20">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                {activeTechs.map((tech, idx) => (
                  <div
                    key={tech.name}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="
                      glass p-5 rounded-2xl
                      transform transition-all duration-300
                      hover:scale-110 hover:-translate-y-2
                      hover:shadow-2xl
                      border border-border/50
                      hover:border-primary/40
                      relative overflow-hidden
                      cursor-pointer
                    ">
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                        style={{ 
                          background: `radial-gradient(circle at center, ${tech.color}20, transparent)`,
                        }}
                      />
                      
                      {/* Logo Container */}
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="
                          w-14 h-14 rounded-xl 
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:scale-110
                          relative
                        "
                        style={{
                          backgroundColor: `${tech.color}08`,
                        }}
                        >
                          {/* Logo glow ring */}
                          <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `0 0 20px ${tech.color}40, inset 0 0 20px ${tech.color}10`
                            }}
                          />
                          
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-9 h-9 object-contain relative z-10 drop-shadow-lg"
                            onError={(e) => {
                              // Fallback if logo fails to load
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML += `<div class="text-2xl font-bold" style="color: ${tech.color}">${tech.name.substring(0, 2)}</div>`;
                            }}
                          />
                        </div>
                        
                        {/* Tech Name */}
                        <span className="
                          text-xs font-semibold text-center
                          text-foreground/90
                          group-hover:text-primary
                          transition-colors duration-300
                          leading-tight
                        ">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 flex justify-center">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Constantly learning and expanding my skillset
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};