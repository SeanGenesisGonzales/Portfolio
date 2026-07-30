import SocialLink from "./AboutMeComponents/SocialLink.jsx";

import Mypicture from "../assets/Logo/me.png";
export default function AboutMe() {
  return (
    <div className=" animate-fade-in grid gap-0 md:gap-3 grid-cols-1 md:grid-cols-3 h-fit w-[80vw]  border-b-2 border-LightMode dark:border-DarkMode pb-[5vh]">
      <div className="flex justify-center lg:justify-end">
        <img id="AboutMe" src={Mypicture} alt="" className=" w-fit " />
      </div>
      <div className="col-span-2 mt-5 md:mt-0 flex flex-col gap-5 justify-center items-center md:items-start text-LightMode dark:text-DarkMode">
        <p
          id="AboutMe"
          className="font-extrabold text-5xl md:text-7xl  font-['Times_New_Roman']">
          Hi, I'm Sean!
        </p>
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
            href="https://github.com/SeyanNumeroUno"
            LinkName="Github"
          />
        </div>
        <a
          className="h-fit w-fit px-3 py-1 rounded-[50px] border-2 font-black bg-LightMode text-DarkMode hover:text-LightMode hover:bg-DarkMode border-LightMode dark:text-LightMode dark:bg-DarkMode dark:border-DarkMode dark:hover:bg-LightMode dark:hover:text-DarkMode dark:hover:border-DarkMode "
          href="">
          Download CV Here
        </a>
      </div>
    </div>
  );
}
