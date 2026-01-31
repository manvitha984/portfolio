import { Trophy, Award, Code, Briefcase, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Briefcase,
    title: "Microsoft Intern",
    description: "Technical Consultant Intern at Microsoft",
    highlight: "Ex-Microsoft",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "8x Hackathon Winner",
    description: "Champion across multiple prestigious hackathons",
    highlight: "8 Wins",
    color: "primary",
  },
  {
    icon: Award,
    title: "Google Girl Hackathon Finalist",
    description: "Top 75 finalist out of 58,000+ participants",
    highlight: "Top 0.13%",
    color: "highlight",
  },
  {
    icon: Code,
    title: "Competitive Programming",
    description: "Expert on Codeforces • Knight on LeetCode • 3★ on CodeChef",
    highlight: "Competitive Coder",
    color: "primary",
  },
  {
    icon: Medal,
    title: "IIWCPC Finalist",
    description: "Top 11 finalist at IIWCPC hosted by IIT Guwahati",
    highlight: "Top 11",
    color: "highlight",
  },
  {
  icon: Medal,
  title: "Flipkart Grid Semi - Finalist",
  description: "Reached the semi-finals of Flipkart Grid 7.0",
  highlight: "Semi‑Finalist",
  color: "primary",
}
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Celebrating{" "}
            <span className="font-serif italic font-normal text-white">
              milestones & success.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of competitive programming excellence, hackathon victories,
            and professional accomplishments.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass p-6 rounded-3xl hover:scale-105 transition-all duration-300 group animate-fade-in border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with Glow */}
              <div
                className={`w-14 h-14 rounded-2xl ${
                  achievement.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-highlight/10 group-hover:bg-highlight/20"
                } flex items-center justify-center mb-4 transition-all duration-300`}
              >
                <achievement.icon
                  className={`w-7 h-7 ${
                    achievement.color === "primary"
                      ? "text-primary"
                      : "text-highlight"
                  }`}
                />
              </div>

              {/* Highlight Badge */}
              <div className="mb-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    achievement.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-highlight/20 text-highlight"
                  }`}
                >
                  {achievement.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  8+
                </div>
                <div className="text-muted-foreground text-sm">
                  Hackathon Wins
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                  Top 75
                </div>
                <div className="text-muted-foreground text-sm">
                  Google Girl Hackathon
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Expert
                </div>
                <div className="text-muted-foreground text-sm">
                  Codeforces Rating
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                  Top 11
                </div>
                <div className="text-muted-foreground text-sm">
                  IIWCPC Finalist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

