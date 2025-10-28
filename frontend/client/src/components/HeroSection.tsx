import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvFile from "@/assets/cv/T.K.Y.Nimsara.pdf";


export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  T.K. Yasiru Nimsara
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg max-w-2xl text-foreground/90">
              To pursue a challenging career in a reputable organization where I
              can contribute to its growth by utilizing and enhancing my skills
              and competencies in web development and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>

              <Button variant="outline" asChild data-testid="button-download-resume">
                <a href={cvFile} download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>


            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="link-github"
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
                data-testid="link-linkedin"
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
                data-testid="link-email"
              >
                <a href="mailto:yasiru01nimsara@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="link-phone"
              >
                <a href="tel:+94784798095">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-chart-2/20 to-primary/20 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <img
                    src="/src/assets/image/img.jpg"
                    alt="Yasiru Nimsara"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover mx-auto"
                  />
                  <p className="text-sm text-muted-foreground">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
