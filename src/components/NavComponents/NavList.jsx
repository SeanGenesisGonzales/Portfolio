import NavLinks from "./NavLinks.jsx";
import ThemeButton from "./ThemeButton.jsx";


export default function NavList() {
     return (
       <>
         <NavLinks href="TechStack" NavName="Tech Stack" />
         <NavLinks href="Certification" NavName="Certifications" />
         <NavLinks href="" NavName="Projects" />
         <NavLinks href="" NavName="Contact Me" />
         <ThemeButton />
       </>
     );
}