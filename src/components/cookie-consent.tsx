"use client";

import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

const CONSENT_KEY = "elk-cookie-consent";

const CONSENT_EVENT = "elk-cookie-consent-changed";

function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getConsentSnapshot() {
  return localStorage.getItem(CONSENT_KEY);
}

// Treat consent as already decided during SSR/hydration so no flash occurs.
function getConsentServerSnapshot() {
  return "pending";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  if (consent !== null) return null;

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          We use cookies to understand how visitors use this site and to improve your
          experience. See how we handle your data in our privacy practices.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("declined")}>
            Decline
          </Button>
          <Button size="sm" onClick={() => choose("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
