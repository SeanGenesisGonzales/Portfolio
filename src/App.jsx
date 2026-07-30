import "./styles/index.css";
import Nav from "./components/Nav.jsx";
import AboutMe from "./components/AboutMe.jsx";
import TechStack from "./components/TechStack.jsx";
import Certifications from "./components/Certifications.jsx";



export default function App() {
  return (
    <>
      <div className="backdrop-blur-xl bg-DarkMode dark:bg-LightMode  flex justify-center w-screen fixed z-50  transition-all">
        <Nav />
      </div>

      <div className="flex pt-[10vh] lg:pt-[13vh] select-none flex-col gap-[5vh] items-center b h-screen w-screen  transition-all text-gray-500 overflow-x-hidden bg-DarkMode dark:bg-LightMode sticky scrollbar-none">
        <AboutMe />
        <TechStack />
        <Certifications />
      </div>
    </>
  );
}
