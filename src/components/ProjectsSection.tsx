import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Blood Group Detection Using Fingerprint Recognition",
    description:
      "An innovative machine learning project that predicts blood groups from fingerprint patterns using Convolutional Neural Networks. Built with a focus on accuracy and real-world applicability in healthcare.",
    technologies: ["Python", "CNN", "TensorFlow", "Keras"],
    githubUrl: "#",
  },
  {
    title: "WorkLink – Daily Wage Job Connector",
    description:
      "A web platform designed to connect daily wage workers with potential employers. Features include job listings, worker profiles, and an easy-to-use interface for both parties.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                {/* Gradient overlay at top */}
                <div className="h-2 hero-gradient" />
                
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
