import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5  py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-800/[0.8] dark:bg-slate-800/[0.8] block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, delay: 0.3 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription><Image src={item.description} alt="icon" className="h-12 w-12" /></CardDescription>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-md h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4 flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-xl text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("", className)}>
      {children}
    </p>)
  );
};
