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
    <div className="w-[80vw] grid grid-cols-1 lg:gap-5 lg:grid-cols-2 h-fit border-b-2 border-LightMode py-[5vh] px-2 dark:border-DarkMode text-LightMode dark:text-DarkMode">
      <div className="grid grid-rows-5 gap-5">
        <div>
          <p className=" font-black text-2xl">Basic Info</p>
          <div>
            <p>📍 Lives in Timalan, Naic, Cavite</p>
            <p>🏫 3rd-Year Student in Cavite State University</p>
            <p>📚 Currently taking Bachelor of Science in Computer Science</p>
            <p>💼 Open for Internship opportunities.</p>
          </div>
        </div>

        <div className="row-span-4">
          <p className=" font-black text-2xl">Soft Skills</p>
          {SoftSkills.map((e, index) => (
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex justify-center items-center">
                <div className="h-10 w-10 flex font-black rounded-[50px] justify-center items-center dark:bg-LightMode border-2 border-LightMode dark:border-DarkMode">
                  {index + 1}
                </div>
              </div>
              <div className="col-span-8 flex flex-col">
                <p className="font-bold">{e.title}</p>
                <p className="text-justify">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className=" font-black text-2xl">What I Do</p>

        {WhatIDo.map((e, index) => (
          <div className="grid grid-cols-10">
            <div className="col-span-2 flex justify-center items-center">
              <div className="h-10 w-10 flex font-black rounded-[50px] justify-center items-center text-DarkMode bg-LightMode dark:text-LightMode dark:bg-DarkMode">
                {index + 1}
              </div>
            </div>
            <div className="col-span-8 flex flex-col">
              <p className="font-bold">{e.title}</p>
              <p className="text-justify">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
