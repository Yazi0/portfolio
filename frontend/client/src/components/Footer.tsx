import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">T.K. Yasiru Nimsara</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about creating innovative web
              solutions
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`footer-link-${link.id}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="footer-github"
              >
                <a
                  href="https://github.com/Yazi0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="footer-linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/yasiru-nimsara-9a8566379"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="footer-email"
              >
                <a href="mailto:yasiru01nimsara@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} T.K. Yasiru Nimsara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
