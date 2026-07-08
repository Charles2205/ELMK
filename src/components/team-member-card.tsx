import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function TeamMemberCard({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col items-center gap-3 pt-6 text-center">
        <Avatar className="size-16">
          <AvatarFallback className="font-heading text-lg font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-primary">{role}</p>
        </div>
        <p className="text-pretty text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
