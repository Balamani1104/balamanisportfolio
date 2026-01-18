import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 hero-gradient rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student with a strong 
                foundation in programming, web development, and problem-solving. 
                Currently pursuing my degree, I'm dedicated to learning new technologies 
                and building impactful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech has led me to explore various domains from machine 
                learning to full-stack development. I believe in writing clean, 
                efficient code and creating user-friendly applications that make a 
                difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card card-shadow">
                <div className="p-3 rounded-lg hero-gradient">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in Computer Science Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card card-shadow">
                <div className="p-3 rounded-lg hero-gradient">
                  <Code2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Focus Areas</h3>
                  <p className="text-sm text-muted-foreground">
                    Web Development, Machine Learning, DSA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card card-shadow">
                <div className="p-3 rounded-lg hero-gradient">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    To become a skilled Software Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
