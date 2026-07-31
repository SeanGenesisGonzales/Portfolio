import { motion } from "framer-motion";

motion
export default function ListTech(ListTitle, array) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p className="text-[1rem] font-black text-DarkMode font-['Times_New_Roman'] text-nowrap">
        {ListTitle}
      </p>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {array.map((e, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 * index + 0.3, ease: "linear" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" px-5 py-1 flex w-fit rounded-[50px] justify-center items-center border-2 text-nowrap bg-DarkMode text-LightMode hover:bg-LightMode hover:text-DarkMode border-DarkMode  "
            key={index}>
            {e}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
