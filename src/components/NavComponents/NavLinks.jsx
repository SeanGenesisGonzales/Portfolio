export default function NavLinks({ href, NavName }) {
  return (
    <a
      className="transition-all text-nowrap no-underline! select-none cursor-pointer text-LightMode dark:text-DarkMode hover:font-black"
      onClick={(e) => {
        e.preventDefault();

        document.getElementById(href).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }}>
      {NavName}
    </a>
  );
}
