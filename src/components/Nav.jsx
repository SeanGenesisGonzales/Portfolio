import NavList from "./NavComponents/NavList";
import { useState } from "react";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div className="  flex w-[80vw] h-fit lg:h-15  gap-0 py-2 lg:py-0  px-2 lg:px-5  border-b-LightMode border-b-2 dark:border-b-DarkMode">
        <div className=" mr-auto text-nowrap flex flex-row justify-center items-center color h-full w-fit">
          <a
            onClick={(e) => {
              e.preventDefault();

              document.getElementById("AboutMe").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="no-underline! cursor-pointer font-[garamond] text-[1rem] lg:text-4xl  font-bold text-black dark:invert ">
            Sean Gonzales
          </a>
        </div>

        <>
          <div className="hidden lg:flex flex-row gap-10 h-full items-center ">
            <NavList />
          </div>

          <div className="lg:hidden relative scale-120 dark:text-DarkMode m-auto mr-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="font-extrabold">
              ☰
            </button>

            {menuOpen && (
              <div
                className="absolute right-0 flex flex-col gap-2 items-center bg-DarkMode border-LightMode border rounded-lg shadow-lg p-4 w-fit dark:bg-black dark:border-DarkMode"
                onClick={(e) => e.stopPropagation()}>
                <NavList />
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
}
