import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/manvitha984", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/manvitha-maddula/", label: "LinkedIn" },
  { img: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/leetcode.svg", href: "https://leetcode.com/manvitha984", label: "LeetCode" },
  { img: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codechef.svg", href: "https://www.codechef.com/users/manvitha6731", label: "CodeChef" },
  { img: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeforces.svg", href: "https://codeforces.com/profile/manvitha6731", label: "Codeforces" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pavana Manvitha. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                {social.icon ? (
                  <social.icon className="w-5 h-5" />
                ) : (
                  <img
                    src={social.img}
                    alt={social.label}
                    className="w-5 h-5"
                    style={{ filter: "invert(1) brightness(2)" }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};