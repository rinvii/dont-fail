export function CTAButton({
  children,
  outline,
}: {
  children: React.ReactNode;
  outline: boolean;
}) {
  const outlineClasses =
    "border dark:border-neutral-400  dark:text-neutral-200 dark:hover:border-white dark:hover:text-white border-[#EAEAEA] text-neutral-800 hover:border-black hover:text-black";
  const filledClasses =
    "dark:text-black text-white border-transparent bg-black dark:bg-white";

  return (
    <div className="group relative w-full">
      <button
        className={`w-full min-w-[120px] rounded text-base font-medium no-underline transition-all duration-300 md:leading-6 ${
          outline ? outlineClasses : filledClasses
        }`}
      >
        {children}
      </button>
    </div>
  );
}
