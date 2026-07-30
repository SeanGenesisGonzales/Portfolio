import {useState} from "react";

export default function CertificateCard({ Image, Title, DateAcquired }) {
     const [isClicked, setIsClicked] = useState(false);

     return (
       <div className=" transition-all bg-DarkMode dark:bg-LightMode  overflow-hidden  h-full w-full border-3 border-LightMode rounded-[50px] flex flex-col  items-center text-LightMode dark:text-DarkMode dark:border-DarkMode">
         <img
           src={Image}
           className="h-[80%] w-full cursor-pointer"
           onClick={() => setIsClicked(!isClicked)}
         />

         {isClicked && (
           <div
             className="fixed m-auto inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[10px] border-2"
             onClick={() => setIsClicked(false)}>
             <img
               src={Image}
               className="w-[80vw] h-fit md:w-[50vw] object-contain cursor-pointer"
               onClick={(e) => e.stopPropagation()}
             />
           </div>
         )}

         <div className=" flex flex-col justify-center items-center px-3">
           <p className="font-bold text-center">{Title}</p>
           <p className="">{DateAcquired}</p>
         </div>
       </div>
     );
}