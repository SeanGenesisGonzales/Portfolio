import { useTheme } from "../../context/useTheme.jsx";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-LightMode cursor-pointer dark:text-DarkMode  py-3 px-3 rounded-[50px]  h-5  w-fit flex gap-1  justify-center items-center border-2 border-LightMode dark:border-DarkMode">
      Theme:
      {darkMode ? (
        <div className="h-5 w-5 bg-DarkMode rounded-[50px] mask-[radial-gradient(circle_at_25%_50%,transparent_35%,black_0)] "></div>
      ) : (
        <div className="h-5 w-5 border bg-LightMode border-LightMode rounded-[50px]"></div>
      )}
    </button>
  );
}
