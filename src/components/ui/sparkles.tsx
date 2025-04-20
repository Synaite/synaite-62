
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle = ({ color = "#FFF", size = 4, style = {} }: SparkleProps) => {
  return (
    <span
      className="absolute animate-[sparkle_1s_ease-in-out_forwards]"
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: "50%",
        ...style,
      }}
    />
  );
};

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
}

const generateSparkle = () => ({
  id: Math.random(),
  createdAt: Date.now(),
  color: "white",
  size: Math.random() * 3 + 2,
  style: {
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    zIndex: 2,
  },
});

const Sparkles = ({ children, className }: SparklesProps) => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      const now = Date.now();
      setSparkles((sparkles) => {
        const newSparkle = generateSparkle();
        const filtered = sparkles.filter((sp) => now - sp.createdAt < 1000);
        return [...filtered, newSparkle];
      });
    }, 200);

    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-1">{children}</span>
    </span>
  );
};

export { Sparkles };
