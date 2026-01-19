import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "balamanikarre40@gmail.com",
    href: "mailto:balamanikarre40@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/karre-balamani",
    href: "https://www.linkedin.com/in/karre-balamani-b81238395",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/Balamani1104",
    href: "https://github.com/Balamani1104",
    icon: Github,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center justify-between p-5 rounded-xl bg-card card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg hero-gradient group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">{link.name}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
