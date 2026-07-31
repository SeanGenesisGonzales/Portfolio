import NavList from "./NavComponents/NavList";
import { useState } from "react";
import {motion} from "framer-motion"


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ height: "100vh", width: "100vw" }}
        whileInView={{ height: "", width: "" }}
        transition={{
          height: {
            duration: 1,
            ease: "linear",
          },
          width: {
            duration: 0.3,
            ease: "linear",
            delay: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="transition all flex w-[90vw] h-fit lg:h-15  gap-0 py-2 lg:py-0  px-2 lg:px-5 bg-DarkMode dark:bg-LightMode border-b-LightMode border-b-2 dark:border-b-DarkMode">
        <div className=" mr-auto text-nowrap flex flex-row justify-center items-center color h-full w-fit">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5, ease: "linear" }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={(e) => {
              e.preventDefault();

              document.getElementById("AboutMe").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="no-underline! cursor-pointer text-[1rem] lg:text-2xl font-['Times_New_Roman'] font-bold text-black dark:invert ">
            Sean Gonzales
          </motion.a>
        </div>

        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3, ease: "linear" }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:flex flex-row gap-10 h-full items-center ">
            <NavList />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3, ease: "linear" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:hidden relative scale-120 dark:text-DarkMode m-auto mr-0">
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
          </motion.div>
        </>
      </motion.div>
    </>
  );
}
