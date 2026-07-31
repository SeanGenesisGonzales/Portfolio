import { motion } from "framer-motion";
export default function Information() {
  const WhatIDo = [
    {
      title: "Full Stack Web Development",
      desc: "I develop complete web applications from front end to back end, ensuring seamless functionality and performance.",
    },
    {
      title: "Quality Assurance & Testing",
      desc: "I test applications to identify bugs, verify functionality, and ensure a reliable, user-friendly experience across different devices and browsers.",
    },
    {
      title: "System Design",
      desc: "I design efficient and scalable system architectures by planning application structure, database relationships, and workflows before development begins.",
    },
    {
      title: "Performance Optimization",
      desc: "I optimize websites and applications to improve speed, responsiveness, and overall performance for a better user experience.",
    },
    {
      title: "Maintenance & Support",
      desc: "I maintain and improve existing applications by fixing bugs, adding new features, and ensuring long-term stability and reliability.",
    },
  ];

  const SoftSkills = [
    {
      title: "Problem Solving",
      desc: "I enjoy analyzing complex challenges and developing efficient, practical solutions to build reliable applications.",
    },
    {
      title: "Communication",
      desc: "I communicate ideas clearly, collaborate effectively with teams, and translate technical concepts into understandable language.",
    },
    {
      title: "Adaptability",
      desc: "I quickly learn new technologies, frameworks, and tools to keep up with the ever-changing web development industry.",
    },
    {
      title: "Attention to Detail",
      desc: "I write clean, maintainable code and carefully test my work to ensure quality and minimize errors.",
    },
    {
      title: "Continuous Learning",
      desc: "I am committed to improving my skills by exploring new technologies, building projects, and staying updated with industry best practices.",
    },
  ];

  return (
    <section className="w-[80vw] px-2 lg:px-5  py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-LightMode dark:text-DarkMode">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-black mb-3">Basic Info</h2>

            <motion.div
              viewport={{ once: true, amount: 0.3 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="space-y-1">
              <p>📍 Lives in Timalan Balsahan, Naic, Cavite</p>
              <p>🏫 3rd-Year Student in Cavite State University</p>
              <p>📚 Currently taking Bachelor of Science in Computer Science</p>
              <p>💼 Open for Internship Opportunities</p>
            </motion.div>
          </div>

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
                    <h3 className="font-bold">{skill.title}</h3>
                    <p className="text-justify">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-black mb-5">What I Do</h2>

          <div className="space-y-6">
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
                  <h3 className="font-bold">{item.title}</h3>
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
