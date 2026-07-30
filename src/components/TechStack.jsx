import ListTech from "./TechStackComponents/TechList.jsx";


export default function TechStack() {
     const FrontEnd = ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap CSS", "Tailwind CSS", "TypeScript"];
     const BackEnd = ["PHP", "Laravel", "Express JS", "Next JS", "MySQL"];
     const Tools = ["VS Code", "XAMPP", "Codex", "MySQL Workbench", "GitHub", 'Git', "Canva"]


  return (
    <div className="flex flex-col gap-[5vh] justify-center items-center bg-LightMode w-screen py-[5vh] px-[10vw] dark:bg-DarkMode">
      <p
        id="TechStack"
        className="font-extrabold text-5xl font-[garamond] dark:text-LightMode text-DarkMode">
        Tech Stack
      </p>
      <div className="h-fit grid  gap-10 grid-cols-1 lg:grid-cols-3 pb-[5vh] border-b-2 border-LightMode dark:border-DarkMode">
        <div>{ListTech("Front-End Development", FrontEnd)}</div>
        <div>{ListTech("Back-End Development", BackEnd)}</div>
        <div>{ListTech("Development Tools", Tools)}</div>
      </div>
    </div>
  );
}