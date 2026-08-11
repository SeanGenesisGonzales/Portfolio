import "./styles/index.css";
import Nav from "./components/Nav.jsx";
import AboutMe from "./components/AboutMe.jsx";
import TechStack from "./components/TechStack.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/footer.jsx";




export default function App() {
  return (
    <div className="transition-all flex flex-col items-center font-[monospace] select-text selection:bg-LightMode selection:text-DarkMode dark:selection:bg-DarkMode dark:selection:text-LightMode">
      <div className=" flex justify-center w-screen fixed z-50 bg-DarkMode dark:bg-LightMode transition-all">
        <Nav />
      </div>

      <div className="flex pt-[10vh] lg:pt-[13vh]  flex-col gap-[5vh] items-center b h-screen w-screen  transition-all text-gray-500 overflow-x-hidden bg-DarkMode dark:bg-LightMode sticky scrollbar-none">
        <AboutMe />
        <TechStack />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}
