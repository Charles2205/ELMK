import { Mail } from "lucide-react";

import { cn } from "@/lib/utils";

export function EmailLink({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-sm border border-border bg-background px-3 py-1.5 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      <Mail className="size-3.5 shrink-0" />
      <span className="break-all">{email}</span>
    </a>
  );
}
