import ListTech from "./TechStackComponents/TechList.jsx";


export default function TechStack() {
  const FrontEnd = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Bootstrap CSS",
    "Tailwind CSS",
    "TypeScript",
  ];
  const BackEnd = ["PHP", "Laravel", "Express JS", "Next JS"];
  const Database = ["MySQL", "MySQL Workbench", "XAMPP"];
  const Tools = [
    "VS Code",
    "Codex",
    "GitHub",
    "Git",
    "Canva",
  ];

  return (
    <div className="flex flex-col gap-[5vh] justify-center items-center border-y-2 border-DarkMode bg-LightMode w-screen py-[5vh] px-[10vw] ">
      <p className="font-extrabold text-5xl font-['Times_New_Roman']  text-DarkMode">
        Tech Stack
      </p>
      <div
        id="TechStack"
         className="h-fit grid px-2 lg:px-5 gap-10 grid-cols-1 lg:grid-cols-4 pb-[5vh] ">
        <div>{ListTech("Front-End Development", FrontEnd)}</div>
        <div>{ListTech("Back-End Development", BackEnd)}</div>
        <div>{ListTech("Database", Database)}</div>
        <div>{ListTech("Development Tools", Tools)}</div>
      </div>
    </div>
  );
}
