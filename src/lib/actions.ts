"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "Please enter your email.").email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
  context: z.string().optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    context: formData.get("context"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the errors below and try again.",
      fieldErrors,
    };
  }

  // Submission is logged server-side; wire up an email/CRM integration here when ready.
  console.log("New inquiry received", parsed.data);

  return {
    status: "success",
    message: "Thank you for your response. ✨",
  };
}

const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email.").email("Enter a valid email address."),
  updates: z.literal("on", { message: "Please confirm you'd like to receive updates." }),
});

export type NewsletterFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function subscribeNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
    updates: formData.get("updates"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check your details and try again.",
    };
  }

  // Subscription is logged server-side; wire up an email list provider here when ready.
  console.log("New newsletter signup", parsed.data);

  return {
    status: "success",
    message: "You're subscribed — welcome aboard! ✨",
  };
}
