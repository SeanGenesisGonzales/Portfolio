import { useTheme } from "../../context/useTheme.jsx";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-LightMode cursor-pointer dark:text-DarkMode  py-3 px-12.5  h-5  w-20 flex gap-1  justify-center items-center hover:font-black">
      {darkMode ? (
        <div className="flex gap-2 justify-center items-center">
          <p>Dark</p>
          <div className="h-5 w-5 bg-DarkMode rounded-[50px] mask-[radial-gradient(circle_at_25%_50%,transparent_35%,black_0)] "></div>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <p>Light</p>
          <div className="h-5 w-5 border  border-LightMode rounded-[50px]"></div>
        </div>
      )}
    </button>
  );
}
