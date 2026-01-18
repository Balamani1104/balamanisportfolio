import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Adaptive Exam Assistant",
    organization: "Vyoma College Hackathon",
    type: "Hackathon",
    description:
      "Participated in a college hackathon and developed an AI-powered adaptive exam assistant that personalizes question difficulty based on student performance. This project demonstrated my ability to work under pressure and implement AI solutions for educational challenges.",
    date: "2024",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlights from hackathons and other experiences
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full hero-gradient ring-4 ring-background" />

                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium hero-gradient text-primary-foreground">
                      <Trophy className="h-3 w-3" />
                      {exp.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.date}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary font-medium text-sm mb-3 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.organization}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
