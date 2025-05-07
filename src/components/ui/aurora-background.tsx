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
  return <main>
      <section className={cn("relative flex flex-col h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg", className)} {...props}>
        
        {children}
      </section>
    </main>;
};