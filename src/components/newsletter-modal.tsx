"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { subscribeNewsletter, type NewsletterFormState } from "@/lib/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DISMISSED_KEY = "elk-newsletter-dismissed";
const initialState: NewsletterFormState = { status: "idle", message: "" };

function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
        <p className="font-heading text-lg font-semibold text-primary">{state.message}</p>
        <p className="text-sm text-muted-foreground">
          We&apos;ll only email you about programs, placements, and events.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex h-full flex-col justify-center gap-5">
      <DialogHeader>
        <DialogTitle className="text-2xl">Stay in the loop</DialogTitle>
        <DialogDescription>
          Get occasional updates on new research placements, mobility programs, and
          events in Berryville.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-2">
        <Label htmlFor="newsletter-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
        {state.status === "error" && (
          <p className="text-sm text-destructive">{state.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox id="newsletter-updates" name="updates" required className="mt-0.5" />
        <Label htmlFor="newsletter-updates" className="text-sm font-normal text-muted-foreground">
          I&apos;d like to receive occasional email updates.
        </Label>
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}

export function NewsletterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      localStorage.setItem(DISMISSED_KEY, "1");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="grid max-w-3xl gap-0 overflow-hidden p-0 sm:max-w-3xl sm:grid-cols-2">
        <div className="relative hidden sm:block">
          <Image
            src="/images/sponsors.jpg"
            alt="A group of young participants in conversation with a program staff member"
            fill
            className="object-cover"
            sizes="400px"
          />
        </div>
        <div className="p-6 sm:p-8">
          <NewsletterForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
