
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <section 
        className={cn(
          "relative flex flex-col h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg", 
          className
        )} 
        {...props}
      >
        {showRadialGradient && (
          <>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-[10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-blue-400/20 blur-[100px]" />
              <div className="absolute -right-[10%] top-[30%] h-[40rem] w-[30rem] rounded-full bg-sky-300/20 blur-[100px]" />
            </div>
          </>
        )}
        {children}
      </section>
    </main>
  );
};
