import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import cvFile from "@/assets/cv/T.K.Y.Nimsara.pdf";
import Img from "@/assets/image/img.jpg";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Software Engineer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const nameLetters = "T.K. Yasiru Nimsara".split("");

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4" />
                <span>Available for New Projects</span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                  {nameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 150
                      }}
                      className="inline-block hover:scale-110 transition-transform cursor-default bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h1>

                <div className="flex items-center gap-3 h-12">
                  <span className="text-2xl md:text-4xl font-bold text-foreground">
                    {displayText}
                  </span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                    className="w-1.5 h-10 bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium"
            >
              Crafting scalable, high-performance web solutions with modern architectures.
              Dedicated to building intuitive digital experiences that drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 h-12 text-base shadow-lg shadow-blue-500/25 group transition-all duration-300"
                data-testid="button-view-projects"
              >
                Explore My Work
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 rounded-2xl px-8 h-12 text-base backdrop-blur-sm group hover:bg-white/5 transition-colors"
                data-testid="button-download-resume"
              >
                <a href={cvFile} download>
                  <Download className="h-5 w-5 mr-2 group-hover:bounce transition-all" />
                  Get CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, link: "https://github.com/Yazi0", testId: "link-github" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/yasiru-nimsara-9a8566379", testId: "link-linkedin" },
                { icon: Mail, link: "mailto:yasiru01nimsara@gmail.com", testId: "link-email" },
                { icon: Phone, link: "tel:+94784798095", testId: "link-phone" }
              ].map((social, i) => (
                <Button
                  key={i}
                  size="icon"
                  variant="ghost"
                  asChild
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  data-testid={social.testId}
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5 text-foreground/70 group-hover:text-blue-400 transition-colors" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Outer Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dashed border-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-dashed border-purple-500/10 rounded-full"
              />

              {/* Glassmorphism Frame */}
              <div className="relative z-10 w-[420px] h-[520px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[4rem] blur-2xl opacity-50" />
                <div className="absolute inset-0 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] shadow-2xl overflow-hidden group">
                  <div className="relative h-full w-full rounded-[3.2rem] overflow-hidden border border-white/5">
                    <motion.img
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      src={Img}
                      alt="T.K. Yasiru Nimsara"
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    />

                    {/* Image Overlays */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute bottom-10 left-10">
                      <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                        <p className="text-white text-lg font-bold">@Yazi0</p>
                        <p className="text-white/60 text-sm">Full Stack Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-xl opacity-40"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl blur-xl opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
