import { Link2 } from "lucide-react";
export default function SocialLink({ href, LinkName }) {
  return (
    <a
      target="_blank"
      href={href}
      className=" transition-all flex flex-nowrap justify-center items-center gap-1 text-nowrap hover:font-black active:font-black">
      {LinkName} <Link2/>
    </a>
  );
}
