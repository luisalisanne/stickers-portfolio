import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  side: "top" | "right" | "bottom" | "left";
}

/**
 * Component that renders a reusable custom tooltip
 * @param props
 */

export default function MyTooltip(props: TooltipProps) {
  const { content, children, side } = props;

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content
          side={side}
          align="center"
          className="break-word z-100 h-fit w-92 bg-slate-100 p-3 text-xs"
        >
          {content}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
