
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-5 h-5 text-yellow-500" />
      <Switch
        checked={isDark}
        onCheckedChange={(val: boolean) => setTheme(val ? "dark" : "light")}
        aria-label="Toggle theme"
        className="bg-muted aria-checked:bg-violet transition-colors"
      />
      <Moon className="w-5 h-5 text-indigo-500" />
    </div>
  );
};

export default ThemeToggle;
