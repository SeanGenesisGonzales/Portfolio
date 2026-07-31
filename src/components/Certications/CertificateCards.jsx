import { useState } from "react";
import { motion } from "framer-motion";

export default function CertificateCard({
  Image,
  Duration,
  Title,
  DateAcquired,
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 * Duration + 0.3, ease: "linear" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-DarkMode dark:bg-LightMode  overflow-hidden  h-full w-full border-3 border-LightMode rounded-[50px] flex flex-col  items-center text-LightMode dark:text-DarkMode dark:border-DarkMode">
      <div className="h-[70%] w-full overflow-hidden ">
        <img
          src={Image}
          className=" h-full w-full cursor-pointer transition-all hover:scale-110"
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>

      {isClicked && (
        <div
          className="fixed m-auto inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-none backdrop-blur-[10px]"
          onClick={() => setIsClicked(false)}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            viewport={{ once: true, amount: 0.3 }}>
            <img
              src={Image}
              className="w-[90vw] h-fit md:w-[50vw] object-contain cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        </div>
      )}

      <div className=" flex flex-col justify-center items-center px-3">
        <p className="font-bold text-center">{Title}</p>
        <p className="">{DateAcquired}</p>
      </div>
    </motion.div>
  );
}
