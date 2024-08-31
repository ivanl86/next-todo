import { PropsWithChildren } from "react";

interface MenubarProps extends PropsWithChildren {
}

const Menubar = ({ children }: MenubarProps) => {
  return (
    <section className="flex max-sm:flex-col justify-between items-center w-full h-full sm:h-16 sm:px-6 py-2 gap-2">
      {children}
    </section>
  );
};

export default Menubar;
