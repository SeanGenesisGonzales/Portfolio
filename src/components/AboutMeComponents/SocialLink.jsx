export default function SocialLink({ href, LinkName }) {
  return (
    <a
      target="_blank"
      href={href}
      className="flex gap-1 font-bold text-md text-nowrap no-underline! text-LightMode hover:text-gray-700 dark:text-DarkMode dark:hover:text-DarkMode dark:hover:scale-110">
      {LinkName} 🔗
    </a>
  );
}
