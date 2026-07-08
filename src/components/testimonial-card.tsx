import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between gap-4 pt-6">
        <div>
          {rating && (
            <div className="mb-3 flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4"
                  fill={i < rating ? "currentColor" : "none"}
                  strokeWidth={1.5}
                />
              ))}
            </div>
          )}
          <p className="text-pretty text-sm leading-relaxed text-foreground">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback className="font-heading text-xs">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-heading text-sm font-medium leading-none">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
