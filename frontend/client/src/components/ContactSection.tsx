"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import dayjs from "dayjs";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yasiru01nimsara@gmail.com",
    href: "mailto:yasiru01nimsara@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 78 479 8095",
    href: "tel:+94784798095",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Yazi0",
    href: "https://github.com/Yazi0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/yasiru-nimsara-9a8566379",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+94 78 479 8095",
    href: "https://wa.me/94784798095",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent sending if form is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_97v797s", // your EmailJS service ID
        "template_jii8jwq", // your EmailJS template ID
        {
          name: formData.name,       // matches {{name}} in template
          email: formData.email,     // matches {{email}} in template
          message: formData.message, // matches {{message}} in template
          time: dayjs().format("YYYY-MM-DD HH:mm"), // matches {{time}} in template
        },
        "GyKTIiVHNDkQA8VaG" // your EmailJS public key
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <Card
                key={idx}
                className="p-6 hover-elevate transition-all"
                data-testid={`contact-card-${info.label.toLowerCase()}`}
              >
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 backdrop-blur-md bg-background/70 shadow-lg rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-background"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
