export default function ListTech(ListTitle, array) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p className="text-[1rem] font-black text-DarkMode font-['Times_New_Roman'] text-nowrap">
        {ListTitle}
      </p>
      <ol className="flex flex-row gap-2 flex-wrap justify-center">
        {array.map((e, index) => (
          <li
            className="px-5 py-1 flex w-fit rounded-[50px] justify-center items-center border-2 bg-DarkMode text-LightMode hover:bg-LightMode hover:text-DarkMode border-DarkMode  transition-all"
            key={index}>
            {e}
          </li>
        ))}
      </ol>
    </div>
  );
}
