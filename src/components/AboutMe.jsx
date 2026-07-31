import SocialLink from "./AboutMeComponents/SocialLink.jsx";
import Information from "./AboutMeComponents/Info.jsx";
import Mypicture from "../assets/Logo/download-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";


export default function AboutMe() {
  return (
    <div className="flex flex-col  h-fit  justify-center items-center border-b-2 border-LightMode dark:border-DarkMode">
      <div className="grid gap-0 md:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-fit w-[80vw] px-2 lg:px-5 border-b-2 border-LightMode dark:border-DarkMode pb-[5vh]">
        <div className="flex justify-center ">
          <img
            id="AboutMe"
            src={Mypicture}
            alt=""
            className=" w-fit  border-b-2 border-LightMode dark:border-DarkMode"
          />
        </div>
        <div className="col-span-1 lg:col-span-3 mt-5 md:mt-0 flex flex-col gap-5 justify-center items-center md:items-start text-LightMode dark:text-DarkMode">
          <TypeAnimation
            sequence={["Hello, I'm Sean!", 2000]}
            wrapper="h1"
            speed={1}
            repeat={0}
            cursor={true}
            className="text-4xl lg:text-7xl font-black font-[Times_New_Roman] text-nowrap"
          />
          <p className="text-justify">
            I'm an aspiring <b>Full-Stack Web Developer</b> passionate about
            building modern, responsive, and user-friendly web applications. I
            enjoy turning ideas into clean, functional, and engaging digital
            experiences while continuously improving my skills and creating
            impactful solutions.
          </p>

          <div className="flex gap-2 p-2 flex-wrap ">
            <SocialLink
              href="https://www.facebook.com/SEYANNUMEROUNO"
              LinkName="Facebook"
            />
            <SocialLink
              href="https://www.linkedin.com/in/sean-genesis-gonzales/"
              LinkName="LinkedIn"
            />
            <SocialLink
              href="https://github.com/SeanGenesisGonzales"
              LinkName="Github"
            />
          </div>
          <a
            className="transition-all duration-300 h-fit w-fit px-3 py-1 rounded-[50px] border-2 font-black bg-LightMode text-DarkMode hover:text-LightMode hover:bg-DarkMode border-LightMode dark:text-LightMode dark:bg-DarkMode dark:border-DarkMode dark:hover:bg-LightMode dark:hover:text-DarkMode dark:hover:border-DarkMode "
            href="">
            Download CV Here
          </a>
        </div>
      </div>

      <Information />
    </div>
  );
}
