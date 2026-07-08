"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm({
  context,
  submitLabel = "Send",
  messagePlaceholder = "Tell us a bit about what you're looking for...",
}: {
  context: string;
  submitLabel?: string;
  messagePlaceholder?: string;
}) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error" && !state.fieldErrors) {
      toast.error(state.message);
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
        <p className="text-lg font-medium text-primary">{state.message}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <input type="hidden" name="context" value={context} />
      <div className="space-y-2">
        <Label htmlFor={`${context}-name`}>Name</Label>
        <Input id={`${context}-name`} name="name" placeholder="Your full name" required />
        {state.fieldErrors?.name && (
          <p className="text-sm text-destructive">{state.fieldErrors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${context}-email`}>Email</Label>
        <Input
          id={`${context}-email`}
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        {state.fieldErrors?.email && (
          <p className="text-sm text-destructive">{state.fieldErrors.email}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${context}-message`}>Message</Label>
        <Textarea
          id={`${context}-message`}
          name="message"
          placeholder={messagePlaceholder}
          rows={5}
          required
        />
        {state.fieldErrors?.message && (
          <p className="text-sm text-destructive">{state.fieldErrors.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
