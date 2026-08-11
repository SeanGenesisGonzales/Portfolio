import { motion } from "framer-motion";
import { MapPin, University, BookOpenText, BriefcaseBusiness, Phone, Mail} from "lucide-react";


export default function Information() {
  const WhatIDo = [
    {
      title: "Full Stack Web Development",
      desc: "Build responsive, scalable web applications using modern frontend and backend technologies.",
    },
    {
      title: "Quality Assurance & Testing",
      desc: "Test applications, identify issues, and ensure reliable, high-quality software.",
    },
    {
      title: "System Design",
      desc: "Design efficient, maintainable, and scalable systems based on project requirements.",
    },
    {
      title: "Performance Optimization",
      desc: "Improve application speed, efficiency, and overall user experience.",
    },
    {
      title: "Maintenance & Support",
      desc: "Maintain applications, fix issues, and continuously improve system functionality.",
    },
  ];

  const SoftSkills = [
    {
      title: "Problem Solving",
      desc: "Analyze challenges and develop practical, efficient solutions.",
    },
    {
      title: "Communication",
      desc: "Communicate ideas clearly and collaborate effectively with others.",
    },
    {
      title: "Adaptability",
      desc: "Quickly learn new technologies and adapt to changing requirements.",
    },
    {
      title: "Attention to Detail",
      desc: "Write clean code and carefully review work to minimize errors.",
    },
    {
      title: "Continuous Learning",
      desc: "Continuously improve skills through practice, projects, and new technologies.",
    },
  ];

  return (
    <section className="w-[90vw] h-fit lg:w-[80vw] px-2 lg:px-5 pt-5 gap-0 md:gap-10 grid grid-rows-4 pb-5 lg:pb-0">
      <div className=" row-span-1 grid grid-cols-1 lg:gap-5 lg:grid-cols-2 text-LightMode dark:text-DarkMode">
        <div className="">
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}>
            <h2 className="text-2xl font-black mb-3">Basic Info</h2>

            <div className="space-y-1">
              <p className="flex items-center gap-3">
                <MapPin /> Lives in Timalan Balsahan, Naic, Cavite
              </p>
              <p className="flex items-center gap-3">
                <University /> 3rd-Year Student in Cavite State University
              </p>
              <p className="flex items-center gap-3">
                <BookOpenText /> Currently taking Bachelor of Science in
                Computer Science
              </p>
              <p className="flex items-center gap-3">
                <BriefcaseBusiness /> Open for Internship Opportunities
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}>
            <h2 className="text-2xl font-black mb-3">Contacts</h2>

            <div className="space-y-1">
              <p className="flex items-center gap-3">
                {" "}
                <Phone />{" "}
                <span className="select-text selection:bg-LightMode selection:text-DarkMode">
                  + 63 935 625 0026
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail />{" "}
                <span className="select-text selection:bg-LightMode selection:text-DarkMode">
                  gonzalesseagen@gmail.com
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="row-span-3 gap-4  grid grid-cols-1 lg:grid-cols-2 text-LightMode dark:text-DarkMode">
        <div className="space-y-8 h-fit">
          <div>
            <h2 className="text-2xl font-black mb-5">Soft Skills</h2>

            <div className="space-y-6">
              {SoftSkills.map((skill, index) => (
                <motion.div
                  viewport={{ once: true, amount: 0.3 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.1 * index + 0.3,
                    ease: "easeOut",
                  }}
                  key={index}
                  className="grid grid-cols-[60px_1fr] gap-4">
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-LightMode dark:border-DarkMode flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{skill.title}</h3>
                    <p className="text-justify">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="space-y-6">
            <h2 className="text-2xl font-black mb-5">What I Do</h2>
            {WhatIDo.map((item, index) => (
              <motion.div
                viewport={{ once: true, amount: 0.3 }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2 * index + 0.3,
                  ease: "easeOut",
                }}
                key={index}
                className="grid grid-cols-[60px_1fr] gap-4">
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-LightMode text-DarkMode dark:bg-DarkMode dark:text-LightMode flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-justify">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
