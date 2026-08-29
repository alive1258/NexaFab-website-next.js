import type { LucideIcon } from "lucide-react";
import { ChevronRight, ChevronDown } from "lucide-react";

export interface FlowNode {
  label: string;
  icon?: LucideIcon;
}

interface FlowDiagramProps {
  nodes: FlowNode[];
  orientation?: "horizontal" | "vertical";
  light?: boolean;
  className?: string;
}

const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  orientation = "horizontal",
  light = false,
  className = "",
}) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`flex ${
        isVertical ? "flex-col items-center" : "flex-col lg:flex-row items-stretch lg:items-center"
      } gap-2 ${className}`}
    >
      {nodes.map((node, i) => (
        <div
          key={node.label}
          className={`flex ${isVertical ? "flex-col items-center w-full" : "flex-col lg:flex-row items-center flex-1"} gap-2`}
        >
          <div
            className={`flex items-center justify-center gap-2.5 rounded-xl px-5 py-4 text-sm font-semibold w-full lg:w-auto ${
              isVertical ? "max-w-xs" : "flex-1"
            } ${
              light
                ? "bg-white/5 border border-white/15 text-white"
                : "bg-white border border-navy-900/10 text-navy-900 shadow-sm"
            }`}
          >
            {node.icon && (
              <node.icon size={17} className={light ? "text-brand-300" : "text-brand-600"} />
            )}
            {node.label}
          </div>

          {i < nodes.length - 1 &&
            (isVertical ? (
              <ChevronDown size={18} className={light ? "text-brand-400/60" : "text-brand-300"} />
            ) : (
              <ChevronRight
                size={18}
                className={`rotate-90 lg:rotate-0 ${light ? "text-brand-400/60" : "text-brand-300"}`}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
